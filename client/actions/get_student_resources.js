import axios from 'axios';
import { GET_STUDENT_RESOURCES } from './types';

export default function getClassEvents() {
	return function (dispatch) {
      axios.get(`/api/student/resources?studentEmail=${localStorage.getItem("email")}`)
      .then (function (response) {
        let classesList = [];
        let resourceList = [];
        console.log(response, "THIS IS RESPONSE");
        response.data.forEach(function(item){
          classesList.push(item.filter(function(obj){
            return obj.teacherId !== undefined
          }));
          resourceList.push(item.filter(function(obj){
            return obj !== undefined
          }));
        });
        let flatResourceList = _.flatten(resourceList);
        let flatClassesList = _.flatten(classesList);
        flatClassesList.forEach(function (singleClass) {
          singleClass.resources = [];
          flatResourceList.forEach(function(singleResource) {
            if(singleResource.classId === singleClass.id) {
              singleClass.resources.push({ name: singleResource.name, url: singleResource.url });
            }
          });
        });
        console.log('this is the response from the resource call',flatClassesList);
        dispatch({ type: GET_STUDENT_RESOURCES, payload: flatClassesList });
      })
      .catch(function (error) {
        console.log('this is the error in the resource get', error);
      });
	};
};