export interface Modal {
  key: string | null | undefined;
  props: any | null | undefined;
}

export interface ModalOnOpen {
  key: ModalKeys;
  props?: any;
}