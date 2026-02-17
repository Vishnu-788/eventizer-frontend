import {Component, inject, signal} from '@angular/core';
import {PaymentService} from './payment-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-payment-processing-component',
  imports: [],
  templateUrl: './payment-processing-component.html',
  styleUrl: './payment-processing-component.scss',
})
export class PaymentProcessingComponent {

  paymentService = inject(PaymentService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  errorMessage = signal<string | null>(null);
  ngOnInit(): void {

    const orderId = this.activatedRoute.snapshot.queryParamMap.get('token');


    if (orderId) {
      this.paymentService.startPolling(orderId).subscribe({
        next: (result: any) => {

          console.log("RESULT:", result);

          if (result.status === 'completed') {
            this.router.navigate(['/payment/success'], { queryParams: { token: orderId } });
          }
          else if (result.status === 'failed') {
            this.router.navigate(['/payment/cancel'], { queryParams: { token: orderId } });
          }
        },
        error: error => {
          console.error(error);
        }
      });
    }
  }

}
