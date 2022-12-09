import { Component, OnInit } from '@angular/core';
import { CodingSpecService } from '../services/coding-spec.service';
import { TerminologyService } from '../services/terminology.service';

@Component({
  selector: 'app-coding-tabs',
  templateUrl: './coding-tabs.component.html',
  styleUrls: ['./coding-tabs.component.css']
})
export class CodingTabsComponent implements OnInit {

  binding: any = {
    title: 'Problem List Finding/Situation/Event (all SNOMED CT)',
    type: 'autocomplete',
    ecl: `< 404684003 |Clinical finding (finding)| OR 
    < 272379006 |Event (event)| OR 
    < 243796009 |Situation with explicit context|`,
    value: '',
    note: 'Searching problem list codes using a complete edition of SNOMED CT.'
  };

  ipsOptions: any[] = [];
  conceptIsPartOfIps = false;
  searching = false;

  constructor(public codingSpecService: CodingSpecService, private terminologyService: TerminologyService) { }

  ngOnInit(): void {
  }
  conceptSelected(concept: any) {
    this.searching = true;
    this.ipsOptions = [];
    this.conceptIsPartOfIps = false;
    this.terminologyService.expandValueSet(`(${concept.code} AND ^816080008 |International Patient Summary|)`, '').subscribe(result1 => {
      if (result1.expansion.total > 0) {
        this.conceptIsPartOfIps = true;
        this.searching = false;
      } else {
        this.terminologyService.expandValueSet(`(> ${concept.code} AND ^816080008 |International Patient Summary|) MINUS (> (> ${concept.code} AND ^816080008 |International Patient Summary|))`, '').subscribe(result2 => {
          this.ipsOptions = result2?.expansion?.contains;
          this.conceptIsPartOfIps = false;
          this.searching = false;
        });
      }
    });
  }

}
