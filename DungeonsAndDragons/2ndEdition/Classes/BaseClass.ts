
export class BaseClass {
  // http://www.orbisrpg.co.uk/Planescape/players_handbook.pdf
  /**
   * Abbreviation: STR
    */
  strength: number;

  /**
   * Abbreviation: DEX
    */
  dexterity: number;

  /**
   * Abbreviation: CON
    */
  constitution: number;

  /**
   * Abbreviation: INT
    */
  intelligence: number;

  /**
   * Abbreviation: WIS
    */
  wisdom: number;

  /**
   * Abbreviation: CHA
    */
  charisma: number;
  // public get CHA(): number { return this.charisma }  // Going to wait on 1 to 1 getter -> property values, as this can be really confusing for no real benefit
}
