import { useParams } from 'react-router-dom';
import DetailsHeader from './DetailsHeader/DetailsHeader';
import DetailsAplBtn from './DetailsAplBtn/DetailsAplBtn';
import DetailsDescription from './DetailsDescription/DetailsDescription';
import DetailsAdtnInfo from './DetailsAdtnInfo/DetailsAdtnInfo';
import DetailsImg from './DetailsImg/DetailsImg';
import DetailsRtnBtn from './DetailsRtnBtn/DetailsRtnBtn';
import DetailsMap from './DetailsMap/DetailsMap';
import './JobDetails.css';

const JobDetail = (props) => {
  window.scroll(0, 0);

  const { jobId } = useParams();
  const thisProduct = props.jobs.find((job) => job.id === jobId);

  return (
    <div className="job_details_wrap">
      <div className="job_details">
        <div className="details_wrap">
          <DetailsHeader />

          <hr className="hr_line_desk" />

          <div className="apply_btn_wrap_desk">
            {props.screenWidth < 899 ? null : <DetailsAplBtn />}
          </div>

          <DetailsDescription
            title={thisProduct.title}
            salary={thisProduct.salary}
            createdAt={thisProduct.createdAt}
            description={thisProduct.description}
          />

          <div className="apply_btn_wrap">
            <DetailsAplBtn />
          </div>

          <div className="addtinfo_images_wrap">
            <DetailsAdtnInfo
              employmentType={thisProduct.employment_type}
              benefits={thisProduct.benefits}
            />

            <DetailsImg pictures={thisProduct.pictures} />
          </div>

          <DetailsRtnBtn />
        </div>

        <DetailsMap
          address={thisProduct.address}
          name={thisProduct.name}
          phone={thisProduct.phone}
          email={thisProduct.email}
          lat={thisProduct.location.lat}
          long={thisProduct.location.long}
        />
      </div>
    </div>
  );
};

export default JobDetail;
