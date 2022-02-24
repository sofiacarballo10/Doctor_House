import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourceList } from '../models/resource-list.model';

export abstract class ResourceService<T> {
  protected apiURL: string;

  constructor(protected httpClient: HttpClient) { }

  getAll(): Observable<ResourceList<T>> {
    return this.httpClient.get<ResourceList<T>>(`${this.apiURL}`);
  }
}
