export class Drug {
  constructor(
    id,
    name,
    contents,
    price,
    pharmacology,
    subCategory,
    company,
    imageUrl,
    indications
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.contents = contents;
    this.pharmacology = pharmacology;
    this.subCategory = subCategory;
    this.company = company;
    this.imageUrl = imageUrl;
    this.indications = indications;
  }
}
