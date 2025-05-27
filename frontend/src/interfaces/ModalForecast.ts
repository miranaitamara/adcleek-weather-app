export interface ModalForecast {
  isOpen: boolean;
  onClose: () => void;
  selectedCodeInsee?: string | null;
}

