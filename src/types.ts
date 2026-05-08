export interface SiteConfig {
  name: string;
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    gradient: string;
    image?: string;
  };
  banner: {
    active: boolean;
    text: string;
  };
  pages: Page[];
}

export interface Page {
  id: string;
  title: string;
  content: any;
  order?: number;
}

export interface Reservation {
  id: string;
  customerId: string;
  rentalId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  price: number;
  notes?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  history: any[];
  files: FileEntry[];
}

export interface FileEntry {
  id: string;
  name: string;
  url: string;
  type: string;
  category: string;
  createdAt: string;
}

export interface FinanceRecord {
  id: string;
  type: 'income' | 'expense' | 'investment';
  category: string;
  amount: number;
  description: string;
  date: string;
}

export interface RentalItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface DashboardWidget {
  id: string;
  type: string;
  title: string;
  position: { x: number, y: number, w: number, h: number };
  config: any;
}

export interface AppState {
  site: SiteConfig;
  agenda: Reservation[];
  customers: Customer[];
  finances: FinanceRecord[];
  rentals: RentalItem[];
  history: any[];
  trash: any[];
  widgets: DashboardWidget[];
}
