$(document).ready(function () {    $('#frmbiodata').bootstrapValidator({        framework: 'bootstrap',        Icons: {            valid: 'glyphicon glyphicon-ok',            invalid: 'glyphicon glyphicon-remove',            validating: 'glyphicon glyphicon-refresh'        },        fields: {            dob: {                validators: {                    notEmpty: {                        message: 'Tanggal lahir harus diisi'                    }                }            },            hp: {                validators: {                    notEmpty: {                        message: 'Nomor Hp harus diisi'                    }                }            }        }    }).on('error.form.bv', function (e) {        $('.err-server').css({'display': 'none'});    });    $('#frmchangepassword').bootstrapValidator({        framework: 'bootstrap',        Icons: {            valid: 'glyphicon glyphicon-ok',            invalid: 'glyphicon glyphicon-remove',            validating: 'glyphicon glyphicon-refresh'        },        fields: {            oldpwd: {                validators: {                    notEmpty: {                        message: 'Password lama harus diisi'                    }                }            },            newpwd: {                validators: {                    notEmpty: {                        message: 'Password baru harus diisi'                    }                }            },            passwordcon: {                validators: {                    notEmpty: {                        message: 'Konfirmasi password baru harus diisi'                    },                    identical: {                        field: 'newpwd',                        message: 'Password harus sama dengan Konfirmasi Password'                    }                }            }        }    }).on('error.form.bv', function (e) {        $('.err-server').css({'display': 'none'});    });    $('#frmaddaddress').bootstrapValidator({        framework: 'bootstrap',        Icons: {            valid: 'glyphicon glyphicon-ok',            invalid: 'glyphicon glyphicon-remove',            validating: 'glyphicon glyphicon-refresh'        },        fields: {            nameplace: {                validators: {                    notEmpty: {                        message: 'Alamat sebagai harus diisi'                    }                }            },            name: {                validators: {                    notEmpty: {                        message: 'Nama Penerima harus diisi'                    }                }            },            hp: {                validators: {                    notEmpty: {                        message: 'Nomor HP harus diisi'                    }                }            },            address: {                validators: {                    notEmpty: {                        message: 'Alamat harus diisi'                    }                }            },            province: {                validators: {                    notEmpty: {                        message: 'Propinsi baru harus diisi'                    }                }            },            subprovince: {                validators: {                    notEmpty: {                        message: 'Kabupaten baru harus diisi'                    }                }            },            district: {                validators: {                    notEmpty: {                        message: 'Kecamatan baru harus diisi'                    }                }            },            subdistrict: {                validators: {                    notEmpty: {                        message: 'Kelurahan baru harus diisi'                    }                }            },            zipcode: {                validators: {                    notEmpty: {                        message: 'Kode pos baru harus diisi'                    }                }            }        }    }).on('error.form.bv', function (e) {        $('.err-server').css({'display': 'none'});    });});