import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from '../issue';
import { Location } from '@angular/common';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  @Input() issue: Issue;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getIssue();
  }

  getIssue(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    /*this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);*/
  }
  goBack(): void {
    this.location.back();
  }



}
