export class Drug {
  constructor(
    id,
    name,
    contents,
    price,
    pharmacology,
    subCategory,
    producer,
    imageUrl
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.contents = contents;
    this.pharmacology = pharmacology;
    this.subCategory = subCategory;
    this.producer = producer;
    this.imageUrl = imageUrl;
  }
}
