export interface ILanguage {
    header: {
        logo: string,
        workHours: string,
    },
    main: {
        title: string,
        subtitle: string
        button: string,
    },
    
    description: {
        title: string,
        item1: {
            title: string,
            subtitle: string,
        },
        item2: {
            title: string,
            subtitle: string,
        }
        item3: {
            title: string,
            subtitle: string,
        },
        item4: {
            title: string,
            subtitle: string,
        },
        info: {
            title: string,
            subtitle: string
        }
    },
    form: {
        title: string,
        subtitle: string,
        content: {
            step1: {
                title: string,
                name: string,
                mail: string,
                phone: string | number,
                account: string,
                button: string
            },
            step2: {
                title: string,
                country: string,
                company: string,
                productType: string,
                attach: string,
                button: string,
                description: {
                    text: string,
                    rights: string
                }
            }
        },
    },
    footer : {
        logo: string,
        rights: string,
    }
}

export interface ILanguages {
    [key: string] : ILanguage
}

export const Languages:ILanguages = {
    RU: {
        header: {
            logo: "Автолонг.ру",
            workHours: "По будням с 9:00 до 17:00"
        },
        main: {
            title: "продавайте больше и чаще",
            subtitle: "С помощью нашей системы вы можете повысить продажи, включая розничные и оптовые",
            button : "Присоединиться",
        },
        description: {
            title: "Автолонг.ру — интернет-магазин комплектующих для грузовых автомобилей",
            item1: {
                title: "Оповестим вас о новом заказе",
                subtitle: "Вы соберёте и упакуете товары. А после упаковки подтвердите отправку грузоперевозчику",
            },
            item2: {
                title: "Свяжемся с грузоперевозчиком",
                subtitle: "Оповестим перевозчика об отправке вашего заказа, он подготовит ресурсы для отправки дальше",
            },
            item3: {
                title: "Заказ привязан к контейнеру",
                subtitle: "После получения заказа, перевозчик закрепит его за контейнером и сообщит номер нам",
            },
            item4: {
                title: "Проследим за движением заказа",
                subtitle: "Заказ в пути. Мы будем следить, чтобы ваши товары успешно прошли таможню",
            },
            info: {
                title: "Заказ на складе и готов к продаже",
                subtitle: "Проверим, чтобы товары соответствовали заказу и подготовим их для продажи нашим клиентам"
            },
        },

        form: {
            title: "Начните работать с нами",
            subtitle: "Заполните анкету, и наш специалист свяжется с вами в ближайшее время",
            content: {
                step1: {
                    title: "Шаг 1 из 2. Контактные данные",
                    name: "Имя",
                    mail: "Электронная почта",
                    phone: "Рабочий телефон",
                    account: "Аккаунт WeChat",
                    button: "Далее"
                },
                step2: {
                    title: "Шаг 2 из 2. Информация о компании",
                    country: "Страна",
                    company: "Название компании",
                    productType: "Вид продукции",
                    attach: "Прикрепить файл",
                    button: "Оставить заявку",
                    description: {
                        text: "Оставляя заявку, вы принимаете условия",
                        rights: "соглашения об обработке персональных данных"
                    }
                }
            },
        },
        footer : {
            logo: "Автолонг.ру",
            rights: "@ 2022 Автолонг",
        }
    },

    中文: {
        header: {
            logo: "奥拖啰挐隔路",
            workHours: "工作日上午9点至下午5点"
        },
        main: {
            title: "与«奥拖啰挐隔路» 一 起在俄罗斯轻松开始销售",
            subtitle: "通过我们的方法，您可以提高经销,包括零货的和批发货的经销",
            button : "参加",
        },
        description: {
            title: "«奥拖啰挐隔路» 一 是卡车零件的网上商店",
            item1: {
                title: "我们会通知您新定制货",
                subtitle: "您会加工的皮革屏当和封装。包装后，您会发送给货运公司确认",
            },
            item2: {
                title: "我们将与货运公司联系",
                subtitle: "我们将给运营商您的定制货发送通知，它将进一步发送的资源准备",
            },
            item3: {
                title: "容器定制货已绑定",
                subtitle: "收到订单后，运营商将将其在容器后面固定，并给我们通知箱号",
            },
            item4: {
                title: "我们将定制货的移动跟踪",
                subtitle: "旅途中的定制货。我们将确保 您的加工的皮革已成功通过海关",
            },
            info: {
                title: "仓储定制货并准备出售",
                subtitle: "我们将检查加工的皮革是否符合订单, 并准备出售给客户"
            },
        },

        form: {
            title: "开始与我们合作吧",
            subtitle: "填写问卷, 我们的专家很快就会联系您",
            content: {
                step1: {
                    title: "第一步。联系方式",
                    name: "命名",
                    mail: "命名尤金",
                    phone: "工作电话",
                    account: "帐户 微信",
                    button: "进一步"
                },
                step2: {
                    title: "第二步。公司信息",
                    country: "一个国家",
                    company: "公司名称",
                    productType: "产品类型",
                    attach: "安在外储存器上",
                    button: "留下一个请求",
                    description: {
                        text: "离开申请后，您接受协议条款",
                        rights: "处理个人数据"
                    }
                }
            },
        },
        footer : {
            logo: "奥拖啰挐隔路",
            rights: "@2022奥拖啰挐隔路",
        }
    },

    EN: {
        header: {
            logo: "Autolong.ru",
            workHours: "Weekdays from 9:00 to 17:00"
        },
        main: {
            title: "An easy start of sales in Russia with Autolong.ru",
            subtitle: "With our system you can increase sales, including retail and wholesale",
            button : "Join",
        },
        description: {
            title: "Autolong.ru 一 online store of components for trucks",
            item1: {
                title: "We'll notify you of a new order",
                subtitle: "We'll notify you of a new order. You will collect and pack the goods. After packing, confirm shipment to the carrier.",
            },
            item2: {
                title: "We'll contact the carrier",
                subtitle: "We will notify the carrier of the shipment of your order, and he will prepare the resources for shipment further.",
            },
            item3: {
                title: "Order related to the container",
                subtitle: "After receiving your order, the carrier will assign it to a container and give us the number.",
            },
            item4: {
                title: "Track your order as it moves",
                subtitle: "Order on the move. We will make sure your items successfully make it through customs.",
            },
            info: {
                title: "Order in stock and ready to ship",
                subtitle: "We will check that the goods correspond to the order and prepare them for sale to our customers."
            },
        },

        form: {
            title: "Start working with us",
            subtitle: "Fill out the form and our specialist will contact you shortly",
            content: {
                step1: {
                    title: "Step 1 of 2. Contact information",
                    name: "Name",
                    mail: "Email",
                    phone: "Phone",
                    account: "Account WeChat",
                    button: "Next"
                },
                step2: {
                    title: "Step 2 of 2. Company Info",
                    country: "Country",
                    company: "Company name",
                    productType: "Type of production",
                    attach: "Attach file",
                    button: "Leave an application",
                    description: {
                        text: "By submitting your application you agree to the",
                        rights: "terms of agreement on personal data processing"
                    }
                }
            },
        },
        footer : {
            logo: "Autolong.ru",
            rights: "@ 2022 Autolong",
        }
    } 
}