import { INSTANCE } from '../constants/action-type';
import { apiCall } from '../utils/api-call';


/**
 * get instances
 */
export const fetchInstancesRequest = () => {
	return async dispatch => {
		try {
			// const token = 'Bearer '.concat(localStorage.getItem('token'));
			const token = localStorage.getItem('token');
			let fetchInstances = await apiCall('/instaces', 'GET', null, { token });
			if (!fetchInstances.data.error) {
				// console.log(fetchInstances.data.data);
				dispatch(fetchIntancesSuccess(fetchInstances.data.data));
			} else {
				// console.log(fetchInstances.data);
				dispatch(fetchInstanceFailure('cannot get data from headers!'));
			}

		} catch (error) {
			dispatch(fetchInstanceFailure('cannot get data from headers!'));
		}
	}
}

export const fetchIntancesSuccess = instances => {
	// console.log(instances)
	return {
		type: INSTANCE.FETCH_INSTANCE_SUCCESS,
		payload: instances
	}
}

export const fetchInstanceFailure = message => {
	return {
		type: INSTANCE.FETCH_INSTANCE_FAILURE,
		message
	}
}

/**
 * create new Intance
 */

export const fetchNewInstanceRequest = () => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token');
			let fetchInstances = await apiCall('/instaces', 'POST', null, { token });

			if (!fetchInstances.data.error) {
				dispatch(fetchNewInstance(fetchInstances.data.data));
				dispatch(fetchInstancesRequest());
			} else {
				// console.log('fetchNewInstanceFailure')
				dispatch(fetchNewInstanceFailure());
			}

		} catch (error) {
			dispatch(fetchNewInstanceFailure());
		}
	}
}

export const fetchNewInstance = newInstance => {
	return {
		type: INSTANCE.FETCH_NEW_INSTANCE_SUCCESS,
		payload: newInstance,
		message: 'Thêm instance thành công!'
	}
}

export const fetchNewInstanceFailure = () => {
	return {
		type: INSTANCE.FETCH_NEW_INSTANCE_FAILURE,
		message: 'Số lượng instance của bạn đã tạo tối đa!'
	}
}

/**
 * get instance by id
 */
export const getInstanceByIDRequest = _id => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token');
			let getInstance = await apiCall(`/instaces/instace-detail/${_id}`, 'GET', null, { token });
			if (!getInstance.data.error) {
				dispatch(getInstanceByID(getInstance.data.data));
				// history.push(`/dashboard/instance/${_id}`, { instance: getInstance.data.data });
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export const getInstanceByID = instance => {
	return {
		type: INSTANCE.DETAIL_INSTANCE,
		payload: instance
	}
}

/**
 * change status
 */
export const changeStatusRequest = (idInstance, status) => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token');
			let res = await apiCall(`/instaces/update-status/${idInstance}/${status === 1 ? 0 : 1}`, 'GET', null, { token })

			if (!res.data.error) {
				dispatch(changeStatus(res.data.data))
			}
		} catch (error) {
			console.log({ error });
		}
	}
}

export const changeStatus = instance => {
	return {
		type: INSTANCE.CHANGE_STATUS,
		payload: instance,
		message: 'Thay đổi trạng thái thành công!'
	}
}

/**
 * change user
 */
export const changeUserRequest = (idInstance) => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token');
			let res = await apiCall(`/instaces/update-user/${idInstance}`, 'GET', null, { token })
			console.log(idInstance)
			if (!res.data.error) {
				dispatch(changeUser(res.data.data))
			}
		} catch (error) {
			console.log({ error });
		}
	}
}

export const changeUser = instance => {
	return {
		type: INSTANCE.CHANGE_USER,
		payload: instance,
		message: 'Thay đổi người dùng thành công!'
	}
}

/**
 * change password
 */
export const changePasswordRequest = (idInstance) => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token');
			let res = await apiCall(`/instaces/update-pwd/${idInstance}`, 'GET', null, { token })

			if (!res.data.error) {
				dispatch(changePassword(res.data.data))
			}
		} catch (error) {
			console.log({ error });
		}
	}
}

export const changePassword = instance => {
	return {
		type: INSTANCE.CHANGE_PASSWORD,
		payload: instance,
		message: 'Thay đổi mặt khẩu thành công!'
	}
}