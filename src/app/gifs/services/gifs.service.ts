import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trengingGifs = signal<Gif[]>([]);
  trengingGifsLoading = signal(true);

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

}
