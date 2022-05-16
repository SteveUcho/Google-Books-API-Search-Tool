export interface Book {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: Record<string, unknown>[];
  readingModes: Record<string, unknown>;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowsAnnnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: Record<string, unknown>;
  imageLinks: Record<string, unknown>;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface Volume {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: Book;
  saleInfo: Record<string, unknown>;
  accessInfo: Record<string, unknown>;
  searchInfo: Record<string, unknown>;
}