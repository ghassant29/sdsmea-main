import { CgArrowRight } from "react-icons/cg";
import { TbLocationQuestion } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import ContactUsSection from "../components/hompage/ContactUsSection";
import ProductCard from "../components/hompage/ProductCard";
import SectionHeader from "../components/SectionHeader";
import Page from "../layouts/page";
import Routes from "../routes";
import { products } from "../utils/products/constants";
import NotFoundPage from "./NotFound";

const ProductsCategoryDetailPage = () => {
  const params = useParams();
  const productId = params.productId;
  if (!productId) return <NotFoundPage />;
  const mappedProducts = Object.values(products);
  const category = mappedProducts
    .map((product) => Object.values(product).flat())
    .flat()
    .find((product) => product.id === productId);

  if (!category) return <NotFoundPage />;

  return (
    <Page title="Products">
      <div className="w-full bg-white flex items-center justify-center pt-20 pb-16 flex-col gap-8 px-8">
        <SectionHeader title={category.name} />
      </div>

      <div className="relative mx-auto w-11/12 md:w-3/4 md:h-fit bg-[#f5f5f5] flex flex-col items-center justify-center pb-10 md:pb-0 rounded-lg">
        <div className=" w-full h-fit flex items-center justify-evenly gap-6 md:p-10 md:flex-row flex-col-reverse">
          <div className="md:w-1/2 md:max-w-lg w-full px-4 md:px-0">
            <h1
              className="text-black font-medium text-md md:text-xl leading-tight"
              dangerouslySetInnerHTML={{ __html: category.description }}
            />

            <div className="w-full flex items-center justify-center flex-col gap-4">
              <Link
                to={Routes.CONTACT}
                className="bg-cblue rounded-lg text-white font-medium text-sm md:text-md leading-tight p-4 w-full text-center mt-4 hover:bg-cblue/80 transition-all"
              >
                Inquires
                <CgArrowRight className="inline-block ml-2" />
              </Link>
            </div>
          </div>
          <div
            className="md:w-1/3 w-full h-[280px] rounded-lg"
            style={{
              backgroundImage: `url(${category.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
        </div>
      </div>

      {category.products && category.products.length > 0 && (
        <div className="w-full bg-white flex items-center justify-center pt-20 flex-col gap-8">
          <div className="w-11/12 md:w-3/4 flex items-start justify-center flex-col gap-8">
            <div className="flex items-start justify-center flex-col gap-1 text-center">
              <span className="text-black font-medium text-md md:text-2xl leading-tight text-left">
                {category.name} products
              </span>

              <div
                className="w-28 h-0.5"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #00aeef, #00aeef 25%, #000000 25%, #000000 50%, #fff202 50%, #fff202 75%, #ec0c8c 75%, #ec0c8c 100%)"
                }}
              />
            </div>
            <div className="w-full flex items-center justify-center md:justify-evenly  gap-10 flex-wrap">
              {category.products?.map((product) =>
                product ? (
                  <ProductCard
                    key={product.id}
                    productId={product.id}
                    name={product.name}
                    image={product.image}
                    subTitle={product.subTitle}
                    link={`/product/${product.category}/${product.parentId}/${product.id}`}
                    viewButtonText="View"
                  />
                ) : null
              )}
            </div>
          </div>

          <div className="w-fit flex items-center justify-center flex-col gap-4 mt-8">
            <Link
              to={Routes.CONTACT}
              className="bg-cblue rounded-lg text-white font-medium text-sm md:text-md leading-tight p-4 w-full text-center mt-4 hover:bg-cblue/80 transition-all"
            >
              Request more products
              <TbLocationQuestion className="inline-block ml-2" />
            </Link>
          </div>
        </div>
      )}

      <ContactUsSection />
    </Page>
  );
};

export default ProductsCategoryDetailPage;