/* 
 * Author : Vanaraj
 * Author Email : c.vanaraj@gmail.com
 * Jquery Validation with simplicity
 * Don't change anything this file
 */
function validation(id) {
    var un;
    var error = true;
    $('#' + id).find('input:text, input:password, input:file, select, textarea, input:radio, input:checkbox')
        .each(function(index, value) {
            if($(value).attr('data-validate') != un) {
                $(value).next('.error').remove();
                var sub = $(value).attr('data-validate').substring(1, $(value).attr('data-validate').length - 1)
                var spl = sub.split(',');
                if($.inArray("required", spl) == 0 || $.inArray(" required", spl) == 0) {
                    if($(value).val() == "") {
                        if($(value).next('p.error').length < 1) {
                            $(value).after("<p class='error'>" + window.settings.errorMessages.required + "</p>");
                            if(window.settings.errorInfo.addClassParent == true) {
                                if(window.settings.errorInfo.parentErrorClass) {
                                    $(value).closest('.form-class').addClass(window.settings.errorInfo.parentErrorClass);
                                }
                            }
                        }
                    error = false;
                    } else {
                        $(value).next('.error').remove();
                        if(window.settings.errorInfo.addClassParent == true) {
                            if(window.settings.errorInfo.parentErrorClass) {
                                $(value).closest('.form-class').removeClass(window.settings.errorInfo.parentErrorClass);
                            }
                        }
                    }
                    
                    
                    if($(value).attr('type') == 'radio' || $(value).attr('type') == 'checkbox') {
                        var rName = $(value).attr('name');
                        if($('input[name='+ rName +']:checked').length <= 0) {
                            $(value).closest('.form-class').find('p').remove();
                            $(value).after("<p class='error'>" + window.settings.errorMessages.required + "</p>");
                            if(window.settings.errorInfo.addClassParent == true) {
                                if(window.settings.errorInfo.parentErrorClass) {
                                    $(value).closest('.form-class').addClass(window.settings.errorInfo.parentErrorClass);
                                }
                            }
                        error = false;
                        } else {
                            $(value).next('.error').remove();
                            if(window.settings.errorInfo.addClassParent == true) {
                                if(window.settings.errorInfo.parentErrorClass) {
                                    $(value).closest('.form-class').removeClass(window.settings.errorInfo.parentErrorClass);
                                }
                            }
                        }
                    }
                    
                }

                if(($.inArray("email", spl) == 1 || $.inArray(" email", spl) == 1) && $(value).val() !="") {
                    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if(!regex.test($(value).val())) {
                       $(value).after("<p class='error'>" + window.settings.errorMessages.email + "</p>");
                       if(window.settings.errorInfo.addClassParent == true) {
                            if(window.settings.errorInfo.parentErrorClass) {
                                $(value).closest('.form-class').addClass(window.settings.errorInfo.parentErrorClass);
                            }
                        }
                       error = false;
                    } else {
                        $(value).next('.error').remove();
                        if(window.settings.errorInfo.addClassParent == true) {
                            if(window.settings.errorInfo.parentErrorClass) {
                                $(value).closest('.form-class').removeClass(window.settings.errorInfo.parentErrorClass);
                            }
                        }
                    }
                }

                if(($.inArray("numeric", spl) == 1 || $.inArray(" numeric", spl) == 1) && $(value).val() !="") {
                    var re = /[^0-9]/g;
                    if(re.test($(value).val())) {
                       $(value).after("<p class='error'>" + window.settings.errorMessages.numeric + "</p>");
                       if(window.settings.errorInfo.addClassParent == true) {
                            if(window.settings.errorInfo.parentErrorClass) {
                                $(value).closest('.form-class').addClass(window.settings.errorInfo.parentErrorClass);
                            }
                        }
                       error = false;
                    } else {
                        $(value).next('.error').remove();
                        if(window.settings.errorInfo.addClassParent == true) {
                            if(window.settings.errorInfo.parentErrorClass) {
                                $(value).closest('.form-class').removeClass(window.settings.errorInfo.parentErrorClass);
                            }
                        }
                    }
                }

                if(($.inArray("float", spl) == 1 || $.inArray(" float", spl) == 1) && $(value).val() !="") {
                    if(!$.isNumeric($(value).val())) {
                       $(value).after("<p class='error'>" + window.settings.errorMessages.float + "</p>");
                       if(window.settings.errorInfo.addClassParent == true) {
                            if(window.settings.errorInfo.parentErrorClass) {
                                $(value).closest('.form-class').addClass(window.settings.errorInfo.parentErrorClass);
                            }
                        }
                       error = false;
                    } else {
                        $(value).next('.error').remove();
                        if(window.settings.errorInfo.addClassParent == true) {
                            if(window.settings.errorInfo.parentErrorClass) {
                                $(value).closest('.form-class').removeClass(window.settings.errorInfo.parentErrorClass);
                            }
                        }
                    }
                }
        }
    });
    
    return error;
}
