type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details</h4>
        <p>The fabric of the product is 97% Cotton and 1st quality.
        The product used in the shoot is size 33.
        Printed products can be used for many years as long as the washing instructions are followed.</p>
      </div>
    </section>
  );
};
  
export default Description;
    