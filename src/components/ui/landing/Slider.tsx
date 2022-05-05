import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import settings from '../../../utils/slider';

function SliderComponent() {
  return (
    <div className="pb-4">
      <h2 className="pb-2 text-2xl font-bold">Fundraisers in your community</h2>
      <Slider {...settings} className="w-full">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <div className="p-2 transition duration-700 border-2 hover:bg-gray-500/5 hover:border-blue-500 group rounded-xl">
              <Link
                className="space-y-1 "
                to={`/fund-request/${index}`}
              >
                <img
                  className="object-fill w-full h-48 transition duration-700 group-hover:scale-105 rounded-xl"
                  src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                  alt=""
                />
                <h2>Fundraiser For Archie</h2>
                <p className="text-sm text-gray-600 truncate">
                  We have been saddened with the news that Archie Low
                  has been diagnosed with AML Leukemia and ha
                  We have been saddened with the news that Archie Low
                  has been diagnosed with AML Leukemia and ha
                  We have been saddened with the news that Archie Low
                  has been diagnosed with AML Leukemia and ha
                </p>
                <div className="text-xs font-bold">
                  $13,733 raised
                  ·
                  114 donations
                </div>
              </Link>
            </div>
          ))
          }
      </Slider>
    </div>
  );
}

export default SliderComponent;
