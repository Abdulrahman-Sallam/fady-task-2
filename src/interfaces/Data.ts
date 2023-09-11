export interface Data {
  _id: string;
  age?: number;
  location?: string;
  name?: string;
  /**
   * describe version for mongoose
   */
  __v?: number;
  [key: string]: string | number | undefined;
}
