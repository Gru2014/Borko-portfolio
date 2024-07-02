import scrum_alliance_logo from '../../Image/cert_logos/scrumAlliance_logo.png';
import aws_certification_logo from '../../Image/cert_logos/awsCertification_logo.png';
import google_cloud_certification_logo from '../../Image/cert_logos/googleCloudCertification_logo.png';
import free_code_camp_logo from '../../Image/cert_logos/freeCodeCamp.png';
import udacity_logo from '../../Image/cert_logos/udacity_logo.png';
import consensys_academy_logo from '../../Image/cert_logos/consensysAcademy_logo.png';

const my_certificates_data = [
  {
    index: 1,
    cert_title_name: 'Certified ScrumMaster (CSM)',
    cert_provider_name: 'Scrum Alliance',
    cert_provider_img_link: scrum_alliance_logo,
    cert_time_stamp: 'Oct 2021',
    back_grd_color: '#e0e0e0',
   
  },
  {
    index: 2,
    cert_title_name: 'AWS Certified Solutions Architect – Professional',
    cert_provider_name: 'AWS Certification',
    cert_provider_img_link: aws_certification_logo,
    cert_time_stamp: 'Oct 2021',
    back_grd_color: '#fff176',
  },
  {
    index: 3,
    cert_title_name: 'Google Professional Cloud Developer',
    cert_provider_name: 'Google Cloud Certification',
    cert_provider_img_link: google_cloud_certification_logo,
    cert_time_stamp: 'July 2022',
    back_grd_color: '#d1b7ff',
  },
  {
    index: 4,
    cert_title_name: 'React Certification by freeCodeCamp',
    cert_provider_name: 'freeCodeCamp',
    cert_provider_img_link: free_code_camp_logo,
    cert_time_stamp: 'Aug 2019',
    back_grd_color: '#aaf5ff',
  },
  {
    index: 5,
    cert_title_name: 'React Nanodegree by Udacity',
    cert_provider_name: 'Udacity',
    cert_provider_img_link: udacity_logo,
    cert_time_stamp: 'APR 2017',
    back_grd_color: '#ffd7ca',
  },
  {
    index: 6,
    cert_title_name: 'Ethereum Developer Certification by ConsenSys Academy',
    cert_provider_name: 'ConsenSys Academy',
    cert_provider_img_link: consensys_academy_logo,
    cert_time_stamp: 'APR 2020',
    back_grd_color: '#ffd7ca',
  },
];

export default my_certificates_data;
