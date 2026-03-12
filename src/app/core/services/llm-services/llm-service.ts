import { inject, Injectable } from '@angular/core';
import { LlmResponse } from '../../models/llmResponse.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../constants/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class LlmService {
  private httpClient = inject(HttpClient)
  get_llm_response(query: string): Observable<LlmResponse> {
    console.log("User Query: ", query);
    
    return this.httpClient.post<LlmResponse>(API_ENDPOINTS.LLM_ENDPOINT, {user_query: query})
  }
}
