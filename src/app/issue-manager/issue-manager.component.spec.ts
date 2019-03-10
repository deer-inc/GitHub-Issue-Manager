import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueManagerComponent } from './issue-manager.component';
import { SharedModule } from '../shared/shared.module';
import { IssueTableComponent } from '../issue-table/issue-table.component';
import { FilterFormComponent } from '../filter-form/filter-form.component';
import { UserGuideComponent } from '../user-guide/user-guide.component';
import { SummaryComponent } from '../summary/summary.component';
import { GitHubService } from '../github.service';
import { RouterModule } from '@angular/router';

describe('IssueManagerComponent', () => {
  let component: IssueManagerComponent;
  let fixture: ComponentFixture<IssueManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IssueManagerComponent,
        IssueTableComponent,
        FilterFormComponent,
        UserGuideComponent,
        SummaryComponent,
      ],
      imports: [
        SharedModule,
        RouterModule.forRoot([])
      ],
      providers: [
        {provide: GitHubService, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
