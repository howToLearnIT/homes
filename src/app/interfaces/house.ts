export interface House {
  readonly id: number;
  readonly name: string;
  readonly city: string;
  readonly state: string;
  readonly photo: string;
  readonly rooms: number;
  readonly wifi: boolean;
  readonly laundry: boolean;
}