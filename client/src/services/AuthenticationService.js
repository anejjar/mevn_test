import Api from '@/services/Api';

export default{
    register(info){
        // console.log(info);
        return Api().post('register',info);
    }
}