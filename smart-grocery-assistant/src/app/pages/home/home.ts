import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AiGroceryAssistant } from '../../services/ai-grocery-assistant';
import { GroceryCategory, GroceryItem } from '../../models/grocery.type';

@Component({
  selector: 'app-home',
  template: `
    <div class="test-container">
      <h2>AI Test</h2>
      <button (click)="testAI()" [disabled]="isLoading()">
        {{ isLoading() ? 'Loading...' : 'Test AI Suggestions' }}
      </button>

      @if (suggestions().length > 0) {
        <div class="suggestions">
          <h3>AI Suggestions:</h3>
          @for (suggestion of suggestions(); track suggestion.item.id) {
            <div class="suggestion">
              <strong>{{ suggestion.item.name }}</strong>
              ({{ suggestion.item.quantity }} {{ suggestion.item.unit }})
              <br />
              <em>{{ suggestion.reason }}</em>
            </div>
          }
        </div>
      }

      @if (error()) {
        <div class="error">Error: {{ error()?.message }}</div>
      }
    </div>
  `,
  styles: `
    .test-container {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }

    button {
      padding: 1rem 2rem;
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .suggestion {
      border: 1px solid #ddd;
      padding: 1rem;
      margin: 0.5rem 0;
      border-radius: 4px;
    }

    .error {
      color: red;
      padding: 1rem;
      background: #ffe6e6;
      border-radius: 4px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class Home {
  private aiAssistant = inject(AiGroceryAssistant);

  protected readonly suggestions = this.aiAssistant.suggestions;
  protected readonly isLoading = this.aiAssistant.isLoading;
  protected readonly error = this.aiAssistant.error;

  testAI() {
    const testItems: GroceryItem[] = [
      {
        id: '1',
        name: 'sauce',
        category: GroceryCategory.PRODUCE,
        quantity: 2,
        unit: 'lbs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'pasta',
        category: GroceryCategory.OTHER,
        quantity: 1,
        unit: 'bunch',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    //Eu passo as lista que vou comprar
    this.aiAssistant.generateSmartSuggestions(testItems);
  }


}
