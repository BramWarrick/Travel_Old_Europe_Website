var map;

var churches = {
   "html_attributions" : [],
   "next_page_token" : "CoQC_QAAAEW3fUkvtNjnOXeMO2tHpeNorcQCDs_RJ4IagbvC-L0I9uFxqL_XWXhOHpdSYId4KdKvNkY2oKAcJAJu9n0FVhGnmmwa52xq_sAOJtE5J645F3ZJg1DFxgzseMHtJ4AbkrV3vCfC9vs8Yl2CSFEw92LLLTnB65lQg1JeqdYXb9t-a6ITmXcrn7MI_s0ivMQ3VYiitTMhQZy7XWj-7WnVzarmSCIgprRltTl6LZH21G30SwFYn364_a-TcLMmU10O49H9qtMjhq7VrKh7EQ2sG_uQOAqZ2XiWEem4q22Sw-7Fu34TaOSoI1WFZ9OfgKGTF7BwhwnwamU7EhXmWshL2kYSEEBp7g5dBm2b2ZBE0N6dFvoaFMdlA48ogTuQ-YPq7tTE5H2ZIe_0",
   "results" : [
      {
         "geometry" : {
            "location" : {
               "lat" : 41.9002108,
               "lng" : 12.5015261
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.90107974999999,
                  "lng" : 12.50202285
               },
               "southwest" : {
                  "lat" : 41.89992115,
                  "lng" : 12.50003585
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "4c12a8d6b8000672c0ea3b74e703e2b0d1169813",
         "name" : "Cappella Stazione",
         "photos" : [
            {
               "height" : 5312,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/102791061723439765346/photos\"\u003eSamir Sayadi\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAA4GXihd1MrVPePAn5MpACXhpbiJmGnf3CjCWb0wd1vkBp0O1YmlRm1yDiaRNV2n_jHygzZxI7sD8XF9Z919OE6Mn3msHb4Jbgrp97t0BusPFuDk03PJnaAIx1Pi89yPp5pDlMCIKMfG8R1UzpWCYiVD0aWhuIsSnfek0MB9y0TvEhCcGOxwerMsWzVXY23iCR0bGhR5ALcgCPTM_Ii0NYOCSgZZS8xw-A",
               "width" : 2988
            }
         ],
         "place_id" : "ChIJm8wJ9KNhLxMRMzK_MgnBhAk",
         "reference" : "CmRRAAAAtDakJqpR0qjKyxQ31iN9KhEniCMrhJekc9pWBM5spnalPhD533oEw_7oyKXBb-o5pS8s2o2zb5oWyS69mXPuPR504AV5TXxuD--m_vbNhF_uKOoPyk0eDsIUhMdSm9VYEhCDlPAa71stvjANcYR8ePCKGhTfh5bc6X3EZx8rsQgeyLu6J4pGag",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Piazza dei Cinquecento, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.8979866,
               "lng" : 12.499856
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.89808560000001,
                  "lng" : 12.49996865
               },
               "southwest" : {
                  "lat" : 41.89795359999999,
                  "lng" : 12.49981845
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "4da698ece26cc22b1c1a0c9cc126283cc0ffa29b",
         "name" : "Pontificio Istituto Arch. Cristiana",
         "place_id" : "ChIJk79bkqRhLxMRNcPLFICzY4s",
         "reference" : "CmRSAAAAlkQgXHeu-DFS-L3sJSsr75jEv-HZm5WC9KL9NTi-XH49xTkuIMUt4y0wTx3dOjwFaAzU2f2MKGuVlX4_YkT2AEfuxoZ4WWmf6eUrryMmYXAsDkdT7HhIsWJXrvbaWM6_EhCyhfT5zjszYUmEGfGtg4MiGhRM7ta_qHiz2mfHyEwNGeBOMxICDA",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Napoleone III, 1, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.897894,
               "lng" : 12.4997585
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.89797215,
                  "lng" : 12.49980595
               },
               "southwest" : {
                  "lat" : 41.89786795,
                  "lng" : 12.49961615
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "85df7a3941ffd607a70b2cacaced872dc3d9654a",
         "name" : "Amm.Ne Patrimonio Sede Apostolica - A.P.S.A.",
         "place_id" : "ChIJIdNek6RhLxMR8-bWCCVf9nI",
         "reference" : "CmRRAAAAHxvcAsAFG-nRy8bkZHQbHrHMzRCrlDzHTR2-IWU3S7C-yRamrt9Tp8-L3LP0cJtr3Bho4y42zNONIk2JfczTUrCSh7umOjCojRV6Zjn-Ou81Tnf-REv3xRoF-pIr-jgBEhCvjxc5a2M9Cd5aFsxSjJgRGhR6hk0B_8I25eKTC0NByaQzklcfyA",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Gioberti, 60, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.8979419,
               "lng" : 12.4992389
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.89799415,
                  "lng" : 12.499328
               },
               "southwest" : {
                  "lat" : 41.89778515,
                  "lng" : 12.499164
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "c9dbce6d5d7e08d564734c0f4fc025eef2d6bf63",
         "name" : "Terz'Ordine Carmelitano Internazionale",
         "place_id" : "ChIJT6FS6aRhLxMRFaeZNSV_auQ",
         "reference" : "CmRSAAAA_RcKdd3Gko_cK_V31CBua-mlyCEmaYBBHDeiUltukWp5PVhYuUyYZ-5rc4mDD6IsK-mHfzGQjZjTsF04hEjYughW3HSrLbKRBbDoc71Z87kU2qNPnpCRHZ1Hz65KXojlEhBtqctJfYENRdvSW8EvPVcAGhQbyfi4AcgddDO5MRzngUsYteW7ZQ",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via dell'Esquilino, 38, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.8978427,
               "lng" : 12.5000738
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.89794724999998,
                  "lng" : 12.5001929
               },
               "southwest" : {
                  "lat" : 41.89780785,
                  "lng" : 12.5000341
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "630490711ba44289c26c59823e212d432c56d545",
         "name" : "Collegium Cultorum Martyrum",
         "place_id" : "ChIJ-ZislqRhLxMRdvXbM-RT33o",
         "reference" : "CmRRAAAA0eDqTXy8xzFdK1WT-oXKIIiXzF3pcMMXNbEG1DZwFuhtbFpFcmh2HAsKnRdrVdjXbkTL7WrZ1EckaBc0CiI0fxrtXeZeoy-7-mug6ob26odrzUksJOSm2b1K03cpyfdmEhBNl7pfPFxdnB2qgQeYIOnfGhTA7FgAdwlXF4Yz7jFaFOoXCQuSjg",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Napoleone III, 1, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.8979189,
               "lng" : 12.4984369
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.89801575,
                  "lng" : 12.4999489
               },
               "southwest" : {
                  "lat" : 41.89762834999999,
                  "lng" : 12.4979329
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "08be889ed634ddc3674918c9942216badbe45982",
         "name" : "Cappella Sistina di Santa Maria Maggiore",
         "photos" : [
            {
               "height" : 1024,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/109969198979857615179/photos\"\u003eHans Goeckner\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAOiBm5QH9BSFUU3KtTa1JF9DSr4DCsM4uV9LntZqHiWlqHektZGIautiSzzYc5MmjHQiPgLGokd4nZakcInRQcuXXfpOYmQCbRdjCJHgGVwnkM3IALmw1NNGzQ1rKnSs5wZg0BVrErD6WWOiTcX9oOgg3gTPtCPgr9IZt7gSWXzxEhB_EFGLWyGpVPmRRm8dUqGBGhQ_3mQBGlLp0lxhlTOT_owby77z4Q",
               "width" : 1545
            }
         ],
         "place_id" : "ChIJRSAI4aRhLxMR1X9zVEqGT4A",
         "reference" : "CmRSAAAAqH4cEsOHIm0zdEkFoOsD4xs8Eo3nMlKTijqMi_XIw4v9yvhRzv_AxTUf6ZhyIsyKFksSFFoeBvsEtS8srPbp7v3DDPUZFRI-K_L7-n5vSmDs61jeMKigmKTa28YJ3wtBEhDbErz8URa8l7QvriqajfCbGhQdK-aeY99w2BtkjgL2wpRli8EAkA",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Piazza di San Maria Maggiore, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.8976055,
               "lng" : 12.4995473
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.89760605,
                  "lng" : 12.4996013
               },
               "southwest" : {
                  "lat" : 41.89760385,
                  "lng" : 12.4993853
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "e6ed8416193d19d3ce7eca940a6764c08a3a3ae0",
         "name" : "Pontificio Seminario Lombardo",
         "photos" : [
            {
               "height" : 3264,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/101144794767487344626/photos\"\u003eVikram Thapar\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAA3l4taMEsoGda4TwclSZVGaUDaAbo5hFNNiLLM5i3FZoVswqO3nADkdzuAWn4xO-4jPRr7jsai39nSvfU4Ii8J09-YjZJ4Jsq46MpJ3Wp8tfejxMQHnEIgFiHEXgtOYcmm6OvIBelvX9RyeJpXqBY3UXrS63d2n8rgzwL1HTT_aEhAJsGqm5jYVK97fFt34pOKzGhRVHICOpdtEOZ_VjOlVCtG2QeAizQ",
               "width" : 2448
            }
         ],
         "place_id" : "ChIJT6FS6aRhLxMRt7WEqRukusI",
         "reference" : "CmRSAAAAMgb10CjTcrTuybxPHckf9IERvlv3aZ6Pi01VHp1gpi6LYK33f-_prJCjnv1WJWg43WHYUTAVyi7yLCBIG74sUeKRMU01lx7TLYzrZ1tFog2EuIGG-Enx3BSrn6i4IHfaEhCQb4TcsQsFeNFm0WIBEdKLGhSNB2gtqc7ga3JfJNJe-QwcmC5vmA",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Piazza di San Maria Maggiore, 5, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.89765630000001,
               "lng" : 12.4983468
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
         "id" : "09b53462cb21a512f77a907677a89e969e33ca0b",
         "name" : "Basilica di Santa Maria Maggiore",
         "place_id" : "ChIJcw-l36RhLxMRON-ZxpBbvM8",
         "reference" : "CmRbAAAAdVwLTn7pQvwB--o88QPUUNlSHEtHaqvYwAJjdZ8wRPejqSVmtApn-PfcbrQGiynzJJudbkRSpvUYfnffEi_Ff7J8evfwB3q4OvaSRbmB6rD9xAYe15wmPu4LsB5kM1qbEhDq4uNThr2BJnaKXiyux6F9GhSKXiwMLVZIIr8pjRE7MH0SLu6zKw",
         "scope" : "GOOGLE",
         "types" : [
            "premise",
            "church",
            "place_of_worship",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.89759859999999,
               "lng" : 12.4984084
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.89815904999999,
                  "lng" : 12.5001972
               },
               "southwest" : {
                  "lat" : 41.89657205,
                  "lng" : 12.4977496
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "e6402378419cdb3afb91efec7a72987d215b87af",
         "name" : "Basilica Papale di Santa Maria Maggiore",
         "photos" : [
            {
               "height" : 1453,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/115603033280937296920/photos\"\u003eYevgeni Yegurnov\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAABVfn6CCU5A9L2JCf2kQDjlAsr7NpcvL1BVVrnowBPAa5WKCVx0FLeGdGOT14TMa5qTVmIUmFbJ6IIRQ8sJ33TzrIICi-olVLiwmcVnPM754ldgXJ8MRgKItrb-UlTh5hZWYZ6ChI2VJBaPz4BNe-f_-f9o45hL-cZw1KC02zcHwEhD3alj60A2eR5ZwE9IymIXjGhTt0NKyvfRmNLKW21J8BDE7L1lbHQ",
               "width" : 1994
            }
         ],
         "place_id" : "ChIJ1zB926RhLxMRejWMj_tUs_c",
         "rating" : 4.7,
         "reference" : "CmRSAAAADjopvCRdGetSbZsajeM_rBOjipqhPcM2OYtgCaEUvk79KsNHsErAM3C1hco7lp7W0hw1bmhbjRCh1aAwfVbWck4LPPLELd0Jq77gxYFYeqIkezElclw6FI_kqKOGdL9XEhCv_zWxOcRxh3Ba4x2pWYUrGhQ2s3RBNl7DIzKvYk5B6K8k1dqHLQ",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Piazza di San Maria Maggiore, 42, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.8975081,
               "lng" : 12.4980288
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.89781740000002,
                  "lng" : 12.498675
               },
               "southwest" : {
                  "lat" : 41.8965802,
                  "lng" : 12.4978134
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "0df9d709c2a43ba010b2677d6fd5ed14f3884a2e",
         "name" : "Cappella Paolina",
         "photos" : [
            {
               "height" : 1024,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/109969198979857615179/photos\"\u003eHans Goeckner\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAEY1jnYiOTSlQiHiIzjsyCXI44ePfl7EEf9n-gKpmFJz9ACZEqfZNYeUTAOCYVpAisPo1GxdHHRp7L5NpdgRnVxyqcwR0oCZIe4kZOfdS0Zsoxoj1Q3qo_lWVIkm6Pt0RMGlwl5GvQqPCjLoXDdvi4ZwFg6zXiGL4Of9YoYsYei-EhDQSzUxQ1P9UxfOmSDKjKjHGhSWYEmf_DGaUCQQXw54_8w2DXNHvw",
               "width" : 1545
            }
         ],
         "place_id" : "ChIJP2DfHqVhLxMR7fwGDZ52X3I",
         "rating" : 4.6,
         "reference" : "CmRRAAAAw2aFHDeF1skDefv0ZfWvtRE9RNYcLnu6LXettV9ZHd7OrzO6CSWHxWs3Ma7g6pPci5zyi8wtGYg8qzCns83mvBLaJpWxat5W4KTPWSZeqFTGryUUgHFK1UEngYWI-dyWEhDU3AYcRkQCx5MhURTEdPxlGhQqqJWzTZmObc8rX41Z9-XODcQv9Q",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Liberiana, 27, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.8970285,
               "lng" : 12.5004378
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.8971281,
                  "lng" : 12.5005438
               },
               "southwest" : {
                  "lat" : 41.89672969999999,
                  "lng" : 12.5001198
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "6d60c50ef2f6a3442a8f7fcd749ae391441b049d",
         "name" : "Saint Antonio Abate",
         "photos" : [
            {
               "height" : 4032,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/117402635243720398736/photos\"\u003eGiorgio Tarquinio Mastronardi\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAACtEA7AdHf6wcpWApxdj46NH3xR9sxN4E3ZURNdirYg8c-18v8maBN7TheMc7w7VRJ0899jdY4bvV3M1eX1X1ZBgO12EOmj6N19wOo0gv64V6xueOZSRCQXDhUqfux0aEg-x2ZNKpbRVjZ1tP9RwvE5CIU7VO0EGzUF1FN4obZ9HEhBEoPfFujBhuU-dncxaI091GhRTqgsVIBdfujuz1t4iU158i1re5Q",
               "width" : 3024
            }
         ],
         "place_id" : "ChIJDwSjuqRhLxMRwqRXAIsjklA",
         "reference" : "CmRRAAAA5Ve3PP_2eLMO3g08zpCEHhcoYnMUpUZSs9xnJdEAqVR1Lp8x9XT-guDOMdqhBLOxjdqTX0z3qFakq7k0-dxk7GPPiqeyUjv6sHh-c9fbCLwdwDmdVm1hv37quaatbe7HEhC2dPsxeOPbTy8ybtKlaHmbGhSS8kmKUlao2M4acirRDxB3Qg_RqA",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Carlo Alberto, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.89807,
               "lng" : 12.49682
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "996f7deb9aa64ada701ab1414d5a8ed7036747f7",
         "name" : "Congregazione Suore Oblate del Bambino Gesù",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2048,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/113421852478841462266/photos\"\u003eCongregazione Suore Oblate del Bambino Gesù\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAOnRz8QG3nu7IhZc9eOMPv64yQQcScdm0Z2ywZbn8NxO5QD11gWcaZFXfuB66v-h0SRf8k9u9-xDwuUyROq-MUL78sNr_bUDDjiqfhZA09YIF_OYEFTQcWFHe5PmC9Sd0i0Mvh9-sHPJAsy5s2-5vKpABaNKIP1llYo1SGqkE5y-EhAYj8yHVTK0SW5ouiTpAHhhGhTXZq1grvM5PGRDLoQCVRsIBU6Q-g",
               "width" : 2048
            }
         ],
         "place_id" : "ChIJdaPrQaVhLxMRR0XHRuGz61Q",
         "reference" : "CmRRAAAAd5VlzFVkxj38_4X2A6FXsoxZhpyRh3wgyRHlM7RVziDKJL7S2dYuelY7ojDpHVyrZJzLPXEZ1g-r2uTmb_KP4Ck7lG8KrLanoNrS4q2SLfkK_6mxloPTcAs52hvFesYJEhBhMBh71GIl8s3e8XRdxi1gGhSutczPlpxeBMzG6CklHilnl67Qhg",
         "scope" : "GOOGLE",
         "types" : [
            "school",
            "church",
            "place_of_worship",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "Via Cavour, 83A, Via Urbana, 1, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.9022469,
               "lng" : 12.5027983
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.90229435000001,
                  "lng" : 12.5028463
               },
               "southwest" : {
                  "lat" : 41.90210455,
                  "lng" : 12.5026543
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "aff5ec26c790256b7e59d3d47e705b83d501d6da",
         "name" : "Salesiani",
         "photos" : [
            {
               "height" : 2448,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/103855569505601666531/photos\"\u003eH. Ramsthaler\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAP7en8fN0ZHvGP0p7KPp9MQkx49YfT6VAvIEc7ZMvkXDuPNYa-DG6mRM0OjXsCmI_ThDusrP9xzdoT7SKs5dxUgRZg3ZPJhuFr7KOlS-1Y7Qt23nTq-arqWendmFSZJbxv-KQqKwC0s9hMYhUjpi9JQngwZ76zrIi-7ojFJJvgICEhA5HykiwlqTEj1IMR8l8fZiGhSNuKvj4cuoSFgitDbwPWlTp1dp-A",
               "width" : 3264
            }
         ],
         "place_id" : "ChIJNwyWP6FhLxMRUlnBYmWbPek",
         "reference" : "CmRSAAAAk8J9r7le6eJ_ZUwnU4wizojrZ0Kgr8jeBefqA0MFJBO6LW9nGqPUi6M09wvRs0Y8gCmP2cpvay4cxCwGWpK2cGfy0nDwgbRFU66yEJuA-xB1aCtghfxbJuKT8heg0pzwEhBIUejN3ObtgAvWDBs4IUjnGhTvdC22vxeUjGyMBeposV9UGNxE5Q",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Marsala, 42, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.9022469,
               "lng" : 12.5027983
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.90229435000001,
                  "lng" : 12.5028463
               },
               "southwest" : {
                  "lat" : 41.90210455,
                  "lng" : 12.5026543
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "5e18ac289da69df50bf24bb190ebfa9b24c1ce44",
         "name" : "Salesiani ICC uffici",
         "place_id" : "ChIJNwyWP6FhLxMR21ndoWk5CqY",
         "reference" : "CmRSAAAAZnrCowtLfY4z8Uv9FnFTAm1FGp7-hcVHaygNtXkHyPV5IwyXRjE3xYoL5p2WZSlwzVETcWy_TkHlXD9Qvs_A8nXe4IeANaZPsG_SSalNzf6pY1TDNiEu-smIiDIsHET0EhD5wbTH_mkt0GiPd1m64jCQGhQkV04jvYu0fmscn2HLSbunlDoYqQ",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Marsala, 42, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.9022469,
               "lng" : 12.5027983
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.90229435000001,
                  "lng" : 12.5028463
               },
               "southwest" : {
                  "lat" : 41.90210455,
                  "lng" : 12.5026543
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "a3da03f9aac496f43b2dfe412af96fcd14a97c3d",
         "name" : "Turismo Giovanile E Sociale-Centro Nazion.Opere Salesiane",
         "place_id" : "ChIJNwyWP6FhLxMRAVTkzB81olU",
         "reference" : "CmRRAAAA7uAEVfiC4juGbYob1jwN2bOI5AX7Jrn-mNmSztYS5Iz5hFf-F_MdQ9ccNAgUIAYjBGTTfkGu5uj4TTiREMXG00xIxyRsrj70GzIer6LLPYkH0-vW3ZlarVFATKWaTkZmEhDuZvipktCw7bO213W3MctGGhTTVOtTfGiZVBiJ5MVoyMZKeTpnyQ",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Marsala, 42, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.89706270000001,
               "lng" : 12.4980772
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.89719379999999,
                  "lng" : 12.49823965
               },
               "southwest" : {
                  "lat" : 41.89701900000001,
                  "lng" : 12.49802305
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "66684af11665d7a0e77a848996ce78a334dbf697",
         "name" : "Centro Azione Liturgica",
         "place_id" : "ChIJo7VCKKVhLxMRHwyQezQMP8k",
         "reference" : "CmRSAAAAzGU3kFET6RV4RNGqICp3bnuS9i1TFJpoS7_65cIc_c0MOtDjbNjJxjfmdazKk0268mmYcAcLa5GHlWujNMbXGzePU-JjxpdXB72QqNvrlXYkW4Ic7dyE_22yHRonLFjjEhAcLUn9vI9uBbvrmyCtOoeDGhS26lVx47KHUUBWIky6yKkK-cLLGg",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Liberiana, 17, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.8982264,
               "lng" : 12.5038015
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.89825105000001,
                  "lng" : 12.5038929
               },
               "southwest" : {
                  "lat" : 41.89817644999999,
                  "lng" : 12.5037565
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "f10745f6b664aa369b00346b8df270c6ae775655",
         "name" : "Suore Missionarie Della Carita'",
         "place_id" : "ChIJ48FoBk2SJRMRCKL1W79pXqU",
         "reference" : "CmRSAAAAZElLQaIr4adfMpSDkchJ_TBIs1tTMcfr-qsz8hEof-cprMFHXU71K_VITmZV0xv7Yqz45XEPi9Z3VpubAhJfRPoM2WDh-mmMTwcPKmB9DOQgKiOpaNP_eigZjypcvjIuEhBAGp4E5yyEIoxOo9O0MGdOGhR_vEfVvLkwv-uiGpqkARLVUtyNnQ",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Urbano Rattazzi, 28, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.90235010000001,
               "lng" : 12.5032305
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.902492,
                  "lng" : 12.50370205
               },
               "southwest" : {
                  "lat" : 41.9023028,
                  "lng" : 12.50181585
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "98e23c0bdc8b296f25fc75244affa5152a4e5ea2",
         "name" : "Sacro Cuore di Gesù a Castro Pretorio",
         "photos" : [
            {
               "height" : 1836,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/104872308793100226133/photos\"\u003eJoel Castolo\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAPx57iMkRgFcoPdB8uEmmOBB-6-MDXhDVksL20mitWkOLzmmIkIQYuXOuGq18SxQWwxdZdCjxeLTlcvMT25RdUM8eDX_Nd_OfqupA4t95NOF7XAPn0mZJJPrg0E9U26NWFhdgbdSbsmsPqRr3tPpxhgHAWSXT-NE7bMZXBD1FMOEEhDZ4CwEiqD_2tyF2yauU3ARGhTo-Q5Y84HHTmhSk6tcp7evzgaqnw",
               "width" : 3264
            }
         ],
         "place_id" : "ChIJNwyWP6FhLxMRh_kyLyxcnes",
         "rating" : 4.5,
         "reference" : "CmRSAAAAS8pFR4gfaUQqw6fSUR4Jc0-I2x5Lp76-AtBJNuVeLv3YCmYWH7ynfBFF_gjK999Vp-8y59rdQ_2kSTy4mJ_uinDPwiyb5BlRwM_fTFJ2yyUCVrPOkr06caM0rLE1WQp-EhBuyg3cI301GLp_9jfbv2kmGhS76PJINiiUy2Xuy1RADEX0sswbWw",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Marsala, 42, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.89842429999999,
               "lng" : 12.495629
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.8984944,
                  "lng" : 12.49599455
               },
               "southwest" : {
                  "lat" : 41.898214,
                  "lng" : 12.49550715
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "40f071f9d6b4ea0e26851f9d75cd095cb8ff8878",
         "name" : "Santa Pudenziana",
         "photos" : [
            {
               "height" : 4912,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/100217583315506364915/photos\"\u003eSilas Lozano Paz\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAEpdPkmSUTd99HPfj0XrIjoZFY-O3qO3iM9RsC5GcL9KLgVHQYN6Nw-moR-TyIBf_ezacz4M45-zAz8gNoIE_ByUm6NyDdUUmSdcE2jyqRcop9hLogfC8yMvH-95dv2IfGs8H4jRusrhh_s34FB60x7_d-LJBGdg9FdoHgJxZIZNEhBn306isvgrD_EQHJm0DAH_GhSJhn8gyBgq7-Qm47CFUutq7r0u8g",
               "width" : 9916
            }
         ],
         "place_id" : "ChIJM4bGQLBhLxMRiOqBKlIbCao",
         "rating" : 4.3,
         "reference" : "CmRSAAAAhKiM8ZXbkCRJagt1tJxbfSFDojsLvw5Sgg-SV5j5FYRAKJi9s6wZYnKQzmzvhntqzft2MeppodqKtSUY45I97MhqRWDGKtYDTQUNwzLlDPbzfSr5TlhTRMF6M3taMqJ-EhCUp2uBbrQX4iHKzJATS-AeGhTWJ9sUAtkAvIi6mUFm4ZwgM147dw",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via Urbana, 160, Roma"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.8975421,
               "lng" : 12.4963124
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.89758944999999,
                  "lng" : 12.49635515
               },
               "southwest" : {
                  "lat" : 41.89740005,
                  "lng" : 12.49629815
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "c63a5ff33d925062afc35887c04eff801d363016",
         "name" : "Associazione L'Opera",
         "place_id" : "ChIJZ4KgWqVhLxMRbTUln0oPMLk",
         "reference" : "CmRSAAAATHzQVSEm0Zt1fO8up277sUGQ7iKjuu5ThjG_s1ivRUh0zyT5yyig7vfKAfKH7oMmHk7Lc7kdtmDwU9y2JQIhtAVpt5XBzrYwx5uPgkRH7PCJEEpwMH9lgja8LNpBd22BEhBMe027ZIqp9YgO2zCUINZbGhQZ6rtJJfxqMbtb9eGGXDAJE_jXZA",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "Via di San Maria Maggiore, 112, Roma"
      }
   ],
   "status" : "OK"
};

var mapStyleValues = [{
  elementType: 'geometry',
  stylers: [{
    color: '#ebe3cd'
  }]
}, {
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#523735'
  }]
}, {
  elementType: 'labels.text.stroke',
  stylers: [{
    color: '#f5f1e6'
  }]
}, {
  featureType: 'administrative',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'administrative',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#c9b2a6'
  }]
}, {
  featureType: 'administrative.land_parcel',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#dcd2be'
  }]
}, {
  featureType: 'administrative.land_parcel',
  elementType: 'labels',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'administrative.land_parcel',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#ae9e90'
  }]
}, {
  featureType: 'landscape.natural',
  elementType: 'geometry',
  stylers: [{
    color: '#b5b292'
  }]
}, {
  featureType: 'poi',
  elementType: 'geometry',
  stylers: [{
    color: '#dfd2ae'
  }]
}, {
  featureType: 'poi',
  elementType: 'labels.text',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'poi',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#93817c'
  }]
}, {
  featureType: 'poi.attraction',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#dfd2ae'
  }]
}, {
  featureType: 'poi.attraction',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#93817c'
  }]
}, {
  featureType: 'poi.park',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#b2b592'
  }]
}, {
  featureType: 'poi.park',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#b5b292'
  }]
}, {
  featureType: 'poi.place_of_worship',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#dfd2ae'
  }]
}, {
  featureType: 'poi.place_of_worship',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#93817c'
  }]
}, {
  featureType: 'road',
  elementType: 'geometry',
  stylers: [{
    color: '#d5d3bf'
  }]
}, {
  featureType: 'road.arterial',
  elementType: 'geometry',
  stylers: [{
    color: '#d5d3bf'
  }]
}, {
  featureType: 'road.highway',
  elementType: 'geometry',
  stylers: [{
    color: '#d5d3bf'
  }]
}, {
  featureType: 'road.highway',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#9E9E9E'
  }]
}, {
  featureType: 'road.highway.controlled_access',
  elementType: 'geometry',
  stylers: [{
    color: '#d5d3bf'
  }]
}, {
  featureType: 'road.highway.controlled_access',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#db8555'
  }]
}, {
  featureType: 'road.local',
  elementType: 'labels',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'road.local',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#806b63'
  }]
}, {
  featureType: 'transit',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'transit.line',
  elementType: 'geometry',
  stylers: [{
    color: '#dfd2ae'
  }, {
    visibility: 'off'
  }]
}, {
  featureType: 'transit.line',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#8f7d77'
  }, {
    visibility: 'off'
  }]
}, {
  featureType: 'transit.line',
  elementType: 'labels.text.stroke',
  stylers: [{
    color: '#ebe3cd'
  }, {
    visibility: 'off'
  }]
}, {
  featureType: 'transit.station',
  elementType: 'geometry',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'water',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#b9d3c2'
  }]
}, {
  featureType: 'water',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#92998d'
  }]
}]

function initMap() {

  // Styles the map for a more vintage appearance
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 41.893732,
      lng: 12.481686
    },
    zoom: 16,
    styles: mapStyleValues
  });


  //Code modified from Google's provided animation example at:
  //https://developers.google.com/maps/documentation/javascript/markers#animate
  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(toggleBounce, 3000);
    }
  };

  function addMarker(lat, long) {
    marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: {
      lat: lat,
      lng: long
    }
  })};

  function loadMarkers(file) {
    var parsed = JSON.parse(file);

    
  };

  // var markerImage = 'marker.png';

  var contentString = '<div class="info-window">' +
    '<h3>Info Window Content</h3>' +
    '<div class="info-content">' +
    '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
    '</div>' +
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400
  });

  // var markerImage = 'marker.png';

  addMarker(41.893732, 12.481686);

  // marker = new google.maps.Marker({
  //   map: map,
  //   animation: google.maps.Animation.DROP,
  //   position: {
  //     lat: 41.893732,
  //     lng: 12.481686
  //   }
  //   // icon: markerImage
  // });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  google.maps.event.addDomListener(window, 'load', initMap);

};

ko.applyBindings({
  category: [{
    id: 1,
    categoryName: 'Recommended',
    link: ''
  }, {
    id: 2,
    categoryName: 'Churches',
    link: ''
  }, {
    id: 3,
    categoryName: 'Points of Interest',
    link: ''
  }, {
    id: 4,
    categoryName: 'Museums',
    link: ''
  }, {
    id: 5,
    categoryName: 'Restaurants',
    link: ''
  }, {
    id: 6,
    categoryName: 'Grocery',
    link: ''
  }, ]
});

var nav = false

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  nav = true
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  nav = false
}

function toggleNav() {
  nav ? closeNav() : openNav();
}