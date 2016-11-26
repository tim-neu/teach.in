import axios from 'axios';
import { ALL_CLASSES, GET_STUDENT_CLASSES } from './types';

export function getClasses() {
	return function (dispatch) {
	axios({
			method: 'GET',
			url: `/api/teacher/classes?teacherEmail=${localStorage.getItem("email")}`,
		})
		.then(function (resp) {
			console.log('the resp is:', resp);
			dispatch({ type: ALL_CLASSES, payload: resp.data });
		});
	};
};

export function getStudentClasses() {
	return function (dispatch) {
		axios({
			method: 'GET',
			url: `/api/student/classes?studentEmail=${localStorage.getItem("email")}`,
		})
		.then(function (resp) {
	      axios.get(`/api/student/resources?studentEmail=${localStorage.getItem("email")}`)
	      .then (function (response) {
	        let classesList = [];
	        let resourceList = [];
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
	        //dispatch({ type: GET_STUDENT_RESOURCES, payload: flatClassesList });
	        var myData = resp.data;
	        var jesseData = flatClassesList;
	        for (var i = 0; i < myData.length; i++) {
	        	var myObj = myData[i];
	        	for (var k = 0; k < jesseData.length; k++) {
	        		var jessObj = jesseData[k];
	        		if (jessObj.name === myObj.name) {
	        			myObj.resources = jessObj.resources;
	        		}
	        	}
	        }
	        console.log('resp data is changed?', resp.data);
	        console.log('my data should be?', myData);
	        var obj = { myData: resp.data, jesseData: flatClassesList };
	        console.log('the payload in classes actions.js is:', obj);
	        dispatch({ type: GET_STUDENT_CLASSES, payload: obj });
	      })
	      .catch(function (error) {
	        console.log('this is the error in the resource get', error);
	      });
		console.log(' the respn in calsses action iss: delete me after pls:', resp);
		// dispatch({ type: GET_STUDENT_CLASSES, payload: resp.data });
		});
	};
};
