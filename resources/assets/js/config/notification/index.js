require('jquery-toast-plugin/dist/jquery.toast.min.js');
require('jquery-toast-plugin/dist/jquery.toast.min.css');
require('./style.css');

function notification(Vue) {
    Vue.notification = {
        success: function(text, heading) {
            $.toast({
                bgColor: '#4DC0B5',
                text: text, // Text that is to be shown in the toast
                heading: heading, // Optional heading to be shown on the toast
                icon: 'success', // Type of toast icon
                showHideTransition: 'slide', // fade, slide or plain
                allowToastClose: true, // Boolean value true or false
                hideAfter: 5000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                textAlign: 'left', // Text alignment i.e. left, right or center
                loader: true, // Whether to show loader or not. True by default
                loaderBg: '#9EC600', // Background color of the toast loader
            })
        },

        info: function(text, heading) {
            $.toast({
                bgColor: '#3490DC',
                text: text, // Text that is to be shown in the toast
                heading: heading, // Optional heading to be shown on the toast
                icon: 'info', // Type of toast icon
                showHideTransition: 'slide', // fade, slide or plain
                allowToastClose: true, // Boolean value true or false
                hideAfter: 5000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                textAlign: 'left', // Text alignment i.e. left, right or center
                loader: true, // Whether to show loader or not. True by default
                loaderBg: '#9EC600', // Background color of the toast loader
            })
        },

        danger: function(text, heading) {
            $.toast({
                bgColor: '#E3342F',
                text: text, // Text that is to be shown in the toast
                heading: heading, // Optional heading to be shown on the toast
                icon: 'error', // Type of toast icon
                showHideTransition: 'slide', // fade, slide or plain
                allowToastClose: true, // Boolean value true or false
                hideAfter: 5000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                textAlign: 'left', // Text alignment i.e. left, right or center
                loader: true, // Whether to show loader or not. True by default
                loaderBg: '#9EC600', // Background color of the toast loader
            })
        },

        warning: function(text, heading) {
            $.toast({
                bgColor: '#F6993F',
                text: "Don't forget to star the repository if you like it.", // Text that is to be shown in the toast
                heading: 'Note', // Optional heading to be shown on the toast
                icon: 'warning', // Type of toast icon
                showHideTransition: 'slide', // fade, slide or plain
                allowToastClose: true, // Boolean value true or false
                hideAfter: 5000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                textAlign: 'left', // Text alignment i.e. left, right or center
                loader: true, // Whether to show loader or not. True by default
                loaderBg: '#9EC600', // Background color of the toast loader

            })
        },

        general: function(text, heading) {
            $.toast({
                heading: heading,
                text: text,
                hideAfter: false,
                position: 'bottom-center',
                stack: true
            })
        },
    }

    Object.defineProperties(Vue.prototype, {
        $noti: {
            get: () => {
                return Vue.notification;
            }
        }
    })
}

export default notification;