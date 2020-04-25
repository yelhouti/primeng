import {Component} from '@angular/core';
import {CountryService} from '../../service/countryservice';
import {LazyLoadEvent, SelectItem, SelectItemGroup} from 'primeng/api';
import {Observable, of} from 'rxjs';

interface City {
    name: string,
    code: string
}

interface Country {
    name: string,
    code: string
}

@Component({
    templateUrl: './multiselectdemo.html',
    styleUrls: ['./multiselectdemo.scss']
})
export class MultiSelectDemo {

    selectedCities1: City[];

    selectedCities2: City[];

    selectedCities3: any[];

    selectedCities4: any[];
    
    selectedCountries1: Country[];

    selectedCountries2: Country[];

    cities: City[];

    groupedCities: SelectItemGroup[];

    countries: City[];

    virtualCountries: Country[];

    items: SelectItem[];

    lazyItems: SelectItem[];

    selectedItems: string[];

    lazySelectedOptions: SelectItem[];

    constructor(private countryService: CountryService) {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ];

        this.groupedCities = [
            {
                label: 'Germany', value: 'de', 
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', value: 'us', 
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', value: 'jp', 
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                    {label: 'Osaka', value: 'Osaka'},
                    {label: 'Tokyo', value: 'Tokyo'},
                    {label: 'Yokohama', value: 'Yokohama'}
                ]
            }
        ];

        this.countryService.getCountries().then(countries => {
            this.virtualCountries = countries;
        });

        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({label: 'Label ' + i, value: 'Value ' + i});
        }
        this.items[200].disabled = true;
        this.selectedItems = [this.items[100].value, this.items[200].value, this.items[300].value];
        this.lazySelectedOptions = [this.items[200], this.items[300]];
    }

    onLazyLoadEvent(event: LazyLoadEvent) {
        this.loadBatch(event).subscribe(res => {
            this.lazyItems = res;
        });
    }

    loadBatch(event: LazyLoadEvent): Observable<SelectItem[]> {
        // simulate server response
        const res = [];
        for (let i = 0; i < this.items.length; i++) {
            if (!event.globalFilter || (event.globalFilter && this.items[i].label.includes(event.globalFilter))) {
                res.push({...this.items[i]});
            }
            if (event.rows === res.length) {
                break;
            }
        }
        return of(res);
    }
}
