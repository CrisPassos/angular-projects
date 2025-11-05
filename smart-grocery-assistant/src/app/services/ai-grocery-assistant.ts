import { computed, Injectable, signal } from '@angular/core';
import { GroceryItem, SmartSuggestion } from '../models/grocery.type';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AiGroceryAssistant {
  private apiRequest = signal<{ items: GroceryItem[] } | null>(null);

  //verifica se houve mudança na pesquisa
  private smartSuggestionResource = httpResource<SmartSuggestion[]>(() => {
    const request = this.apiRequest();

    if (!request) return undefined;

    return {
      url: '/api/smart-suggestions',
      method: 'POST',
      body: request
    };
  });

  readonly suggestions = computed(() => {
    const resourceData = this.smartSuggestionResource.value();
    if (!resourceData) return [] as SmartSuggestion[];

    return resourceData as SmartSuggestion[];
  });

  readonly isLoading = this.smartSuggestionResource.isLoading;
  readonly error = this.smartSuggestionResource.error;

  generateSmartSuggestions(greoceryItems: GroceryItem[]) {
    this.apiRequest.set({ items: greoceryItems });
  }

  clearSuggesttion() {
    this.apiRequest.set(null)
  }


}
