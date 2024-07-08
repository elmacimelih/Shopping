import { Component } from "react";
//import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((error) => console.error("Error fetching categories:", error));
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "CategoryList" };

    return (
      <div>
        <Container>
          <Row>
            {/* <Navi /> */}
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory1={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                info={productInfo}
                currentCategory={this.state.currentCategory}
                products={this.state.products}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
