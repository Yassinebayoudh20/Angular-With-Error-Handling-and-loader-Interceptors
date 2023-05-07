import { Observable } from 'rxjs';
import { ChangeDetectorRef, Component } from '@angular/core';
import { LoaderServiceService } from './services/loader-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MultiplePurposeTrainingApp';
  isLoading = false;

  constructor(
    private loaderService: LoaderServiceService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loaderService.show();
    setTimeout(() => {
      this.loaderService.hide();
    });
  }

  ngAfterViewInit(): void {
    this.loaderService.loading$.subscribe((loading) => {
      this.isLoading = loading;
      // This line forces the view to update immediately after the loading state changes.
      // This fixes the ExpressionChangedAfterItHasBeenCheckedError.
      this.cdr.detectChanges();
    });
  }
}
