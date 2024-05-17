import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import VercelAnalytics, { AnalyticsProps } from '@vercel/analytics';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
