export default {
    login(email, password, callSuccess, callFail){
        var data = { email: email, password: password };
        axios.post('/api/auth/login', data).then(response =>  {
            if (response.data.status == 'success'){
                var data = response.data.data;
                localStorage.setItem('auth_token', data.token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
                callSuccess({id: data.user_id, name: data.user_name });
            } else callFail();
        }).catch(error => {
            console.log(error.response);
            callFail(error.response.status);
        });
    },

    logout(callSuccess, callFail){
        return axios.post('/api/auth/logout').then(response =>  {
            localStorage.removeItem('auth_token');
            axios.defaults.headers.common['Authorization'] = null;
            callSuccess();
        }).catch(error => {
            console.log(error);
            callFail();
        });
    },

    authUser(){
        return axios.get('/api/auth/user').then(response =>  {
            return response.data;
        }).catch(error => {
            return error.response.data;
        });
    },

    check(){
        return axios.post('/api/auth/check').then(response =>  {
            return true;
        }).catch(error =>{
            return false;
        });
    },

    getFilterURL(data){
        let url = '';
        $.each(data, function(key,value) {
            url += (value) ? '&'+key+'='+encodeURI(value) : '';
        });
        return url;
    },

    formAssign(form, data){
        for (let key of Object.keys(form)) {
            if(key !== "originalData" && key !== "errors" && key !== "autoReset"){
                form[key] = data[key];
            }
        }
        return form;
    },

    taskColor(value){
        let classes = ['progress-bar','progress-bar-striped'];
        if(value < 20)
            classes.push('bg-danger');
        else if(value < 50)
            classes.push('bg-warning');
        else if(value < 80)
            classes.push('bg-info');
        else
            classes.push('bg-success');
        return classes;
    },

    formatDate(date){
        if(!date)
            return;

        return moment(date).format('MMMM Do YYYY');
    },

    formatDateTime(date){
        if(!date)
            return;

        return moment(date).format('MMMM Do YYYY h:mm a');
    },

    ucword(value){
        if(!value)
            return;

        return value.toLowerCase().replace(/\b[a-z]/g, function(value) {
            return value.toUpperCase();
        });
    }
}
