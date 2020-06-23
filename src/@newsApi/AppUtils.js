export default class AppUtils{

  static getLocation( props ){
    if(!props) return "/";
    const {location} = props;
    return location.pathname
  }
}
