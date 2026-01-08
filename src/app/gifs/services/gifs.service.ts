import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Gif } from '../interfaces/gif.interface';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';



@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trengingGifs = signal<Gif[]>([]);
  trengingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrengingGifs();
  }

  loadTrengingGifs() {
    this.http.get<GiphyResponse>(`${ environment.GiphyUrl }/gifs/trending`, {
      params: {
        api_key: environment.gighyApiKey,
        limit: 20,
      },
    })
    .subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemtoGifArray(resp.data);
      this.trengingGifs.set(gifs);
      this.trengingGifsLoading.set(false);
      console.log({gifs});
    });
  }

  searchGifs( query: string ) {
    return this.http.get<GiphyResponse>(`${ environment.GiphyUrl }/gifs/search`, {
      params: {
        api_key: environment.gighyApiKey,
        limit: 20,
        q: query,
      },
    }).pipe(
      map( ({data}) => data ),
      map( (items) => GifMapper.mapGiphyItemtoGifArray(items)),

      //historial
      tap( items => {
        this.searchHistory.update( history => ({
          ...history,
          [query.toLowerCase()]: items
        }))
      })

    );
  }

}
