import { Component, OnInit, Input } from '@angular/core';
import { Issue, AssignableUser } from '../github.service';

interface Summary {
  login: string;
  totalCost: number;
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() issues: Issue[];
  @Input() users: AssignableUser[];

  userSummaries: Summary[];

  constructor() {}

  ngOnInit() {
    this.buildSummary();
  }

  getTotalCost(user) {
    return this.issues
      .filter(issue => {
        return issue.assignees.nodes.find(assignee => {
          return assignee.login === user.login;
        });
      })
      .map(issue => {
        const cost = issue.title.match(/- (\d(?:\d+|\d?\.\d)?)H/);
        return cost ? +cost[1] : 0;
      })
      .reduce((acc, value) => acc + value, 0);
  }

  buildSummary() {
    this.userSummaries = this.users.map(user => {
      return {
        totalCost: this.getTotalCost(user),
        login: user.login
      };
    });

    const compare = (a, b) => {
      if (a.totalCost > b.totalCost) {
        return -1;
      } else if (a.totalCost < b.totalCost) {
        return 1;
      } else {
        return 0;
      }
    };

    this.userSummaries = this.userSummaries.sort(compare);
  }
}
