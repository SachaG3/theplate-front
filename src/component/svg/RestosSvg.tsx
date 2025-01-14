import React from "react";

function RestosSvg({...props}: { height: string, width: string }) {
    return (
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" height={props.height} width={props.width}
             className={"mx-auto"} style={{strokeWidth: "10px", stroke: "currentcolor"}}>
            <g transform="matrix(0.10000000149011612, 0, 0, -0.10000000149011612, 34.70985412597656, 448.7285461425781)"
               fill="none" stroke="currentColor">
                <path
                    d="M2125 4040 c-605 -4 -1135 -10 -1178 -15 -68 -6 -81 -11 -114 -41 -20 -18 -51 -39 -70 -45 -18 -6 -33 -15 -33 -20 0 -14 71 -89 85 -89 10 0 14 -143 21 -667 7 -533 12 -667 22 -665 7 1 15 -5 18 -13 4 -8 11 -15 16 -15 6 0 5 6 -2 15 -17 20 -18 43 -26 655 -7 498 -8 680 -1 686 1 2 599 6 1329 10 l1327 7 1 -671 c0 -622 -3 -708 -25 -673 -3 6 -12 8 -20 4 -8 -3 -15 0 -15 7 0 10 -3 10 -15 0 -8 -7 -24 -10 -34 -7 -13 3 -18 1 -15 -8 6 -14 21 -14 43 -1 8 5 16 4 21 -4 6 -9 9 -9 15 0 6 9 9 9 15 0 6 -9 13 -9 29 -1 17 10 21 9 21 -3 0 -10 6 -13 17 -9 13 5 15 2 10 -11 -5 -11 -3 -15 5 -10 8 5 9 2 5 -10 -4 -10 -3 -15 3 -11 13 8 8 55 -6 55 -18 0 -34 1234 -17 1322 3 17 15 31 35 39 30 12 78 66 78 88 0 6 -12 16 -26 21 -16 6 -32 25 -42 50 l-17 40 -180 -2 c-99 -1 -675 -5 -1280 -8z m1471 -45 l21 -45 -1051 -1 c-578 -1 -1210 -4 -1404 -8 -193 -3 -352 -5 -352 -5 0 1 16 19 35 40 l35 38 1316 7 c723 4 1318 10 1321 13 4 3 18 6 32 6 21 -1 30 -10 47 -45z m-84 -64 c122 -5 135 -8 125 -22 -7 -8 -25 -24 -42 -35 -28 -18 -67 -19 -1406 -22 l-1377 -4 -33 30 c-19 17 -31 33 -28 37 17 16 2410 30 2761 16z"/>
                <path
                    d="M1244 3705 c-3 -11 -26 -72 -50 -135 -24 -63 -73 -198 -109 -300 -103 -288 -115 -318 -138 -324 -18 -4 -19 -10 -13 -93 3 -48 7 -141 8 -205 l2 -118 79 0 79 0 -4 -39 c-3 -31 -1 -37 9 -29 7 6 13 23 13 39 0 27 3 29 40 29 l40 0 0 -47 c0 -30 -6 -53 -17 -65 -16 -18 -16 -18 0 -12 13 4 17 1 17 -14 0 -11 -5 -23 -10 -25 -6 -3 -5 -4 2 -3 9 2 14 28 16 84 3 74 5 82 22 82 19 0 20 -8 20 -141 0 -77 -3 -138 -8 -135 -19 11 -46 -25 -46 -64 -1 -24 -7 -45 -16 -51 -13 -9 -12 -10 3 -5 16 5 17 -6 17 -139 0 -84 4 -146 10 -150 5 -3 296 -3 645 1 l635 7 0 344 0 343 23 0 c24 0 24 -1 30 -152 4 -83 7 -405 7 -715 l0 -563 -178 0 c-98 0 -416 -3 -707 -7 l-528 -6 7 44 c3 24 8 82 11 129 3 47 10 100 17 119 10 32 9 36 -16 56 l-26 21 0 308 c0 305 0 309 -19 292 -11 -10 -17 -24 -14 -32 3 -8 -1 -14 -8 -14 -10 0 -10 -3 -3 -8 7 -4 13 -97 18 -271 l7 -264 -66 6 c-36 4 -70 9 -75 12 -6 4 -10 112 -11 258 -1 301 -2 316 -11 310 -5 -2 -8 -12 -8 -22 0 -10 -9 -30 -20 -44 -11 -14 -20 -29 -20 -34 0 -4 5 -1 10 7 6 10 10 -69 10 -232 0 -239 -1 -248 -19 -248 -19 0 -20 10 -23 243 -2 202 -1 245 12 262 12 17 11 16 -11 -2 -14 -13 -29 -23 -35 -23 -5 0 -8 -95 -6 -239 l3 -240 -38 -7 c-21 -4 -51 -13 -67 -21 -25 -13 -27 -18 -21 -46 4 -18 9 -52 11 -77 10 -137 14 -179 20 -213 l7 -37 -166 0 c-100 0 -168 -4 -172 -10 -3 -5 3 -10 14 -10 12 0 21 -5 21 -11 0 -8 43 -9 149 -4 165 8 164 9 163 -55 0 -21 5 -44 13 -50 25 -21 177 -34 250 -22 71 12 124 37 108 53 -5 5 -7 25 -5 44 4 34 6 35 46 36 22 0 147 2 276 4 129 1 552 6 940 9 388 4 735 9 772 12 l66 5 17 -50 c15 -46 20 -52 58 -62 23 -7 78 -12 122 -13 106 -1 157 22 166 74 9 58 12 60 108 60 49 0 109 3 135 6 90 13 44 24 -95 24 l-141 0 6 38 c3 20 8 66 12 102 3 36 15 84 25 107 10 23 19 60 19 82 0 40 0 40 -45 47 l-46 6 3 229 c3 207 1 228 -14 232 -9 3 -19 -2 -22 -10 -3 -8 -6 -107 -6 -219 l0 -204 -40 0 -40 0 0 68 c0 38 -3 123 -7 190 l-6 121 24 -5 24 -5 -25 11 c-14 6 -27 11 -29 10 -2 -1 -9 6 -14 15 -7 14 -11 15 -17 4 -6 -9 -12 -10 -22 -2 -10 8 -18 8 -32 -3 -11 -8 -15 -14 -10 -14 6 0 14 4 19 9 6 6 16 5 26 -3 15 -10 15 -19 7 -65 -8 -38 -8 -70 1 -119 7 -37 11 -98 9 -137 l-3 -70 -52 -3 -51 -3 -4 203 c-2 112 0 204 4 206 4 2 2 14 -4 27 -24 53 -29 6 -22 -231 l7 -244 -30 0 c-30 0 -30 0 -37 68 -3 37 -6 152 -7 256 -1 150 1 190 12 198 10 7 8 8 -8 3 -16 -4 -23 -1 -26 12 -2 10 -3 2 -1 -17 2 -19 6 -142 10 -273 6 -235 6 -239 -15 -253 -13 -9 -21 -26 -21 -42 0 -38 19 -102 30 -102 6 0 10 -50 10 -119 l0 -120 -310 -1 -310 -1 0 399 c0 219 -3 541 -7 715 l-6 317 36 0 37 0 0 -345 0 -345 245 0 245 0 0 131 c0 122 2 133 22 150 11 11 15 19 8 19 -7 0 -10 7 -6 15 3 8 0 15 -5 15 -6 0 -9 -9 -6 -20 3 -11 1 -23 -4 -26 -14 -8 -11 60 3 74 9 9 9 12 -3 12 -12 0 -14 25 -11 160 l3 160 24 0 c22 0 24 -5 30 -72 8 -94 4 -140 -15 -155 -12 -10 -13 -14 -2 -25 11 -11 12 -10 7 3 -4 10 0 19 9 22 9 4 12 13 9 28 -5 18 -3 21 11 16 14 -6 15 -3 5 14 -6 11 -8 23 -5 27 3 3 6 0 6 -6 0 -7 4 -12 10 -12 5 0 7 7 4 15 -6 13 6 20 29 16 4 0 7 8 7 19 0 16 5 19 25 16 14 -3 23 -1 20 4 -3 4 1 11 7 13 8 3 6 6 -4 6 -14 1 -18 10 -18 35 0 40 13 46 106 46 l61 0 6 137 c4 75 7 165 7 200 0 60 -1 63 -25 63 -19 0 -26 7 -31 28 -13 58 -48 176 -119 397 -41 127 -82 258 -92 292 l-18 63 -963 -2 c-958 -2 -962 -2 -968 -23z m1649 8 c-56 -2 -151 -2 -210 0 -59 1 -13 3 102 3 116 0 164 -2 108 -3z m291 -97 c14 -46 42 -142 62 -213 20 -70 58 -200 85 -287 27 -87 47 -162 43 -165 -3 -3 -541 -8 -1196 -10 -1157 -3 -1191 -3 -1184 15 4 11 20 57 36 104 15 47 65 182 110 300 45 118 91 241 102 272 l20 58 826 3 c455 1 882 3 948 5 l122 2 26 -84z m256 -715 l0 -38 -752 -7 c-414 -3 -917 -9 -1118 -12 -201 -3 -421 -1 -490 3 l-125 8 -3 33 -3 32 453 1 c496 2 1914 14 1991 17 l47 2 0 -39z m-2 -198 l-3 -138 -645 -6 c-355 -3 -825 -10 -1045 -14 -220 -4 -484 -5 -587 0 -179 7 -186 8 -192 29 -3 11 -3 75 1 140 l6 119 251 -5 c138 -3 370 -2 516 1 146 4 588 8 983 9 l718 2 -3 -137z m-1038 -462 l0 -299 -22 -5 c-19 -5 -789 -10 -1045 -8 l-63 1 0 299 0 299 78 -4 c42 -3 248 -1 457 4 209 5 428 10 488 10 l107 2 0 -299z m74 -32 c3 -183 5 -334 3 -336 -3 -2 -285 -6 -629 -10 l-625 -6 -7 168 c-6 146 -5 170 9 177 8 5 15 14 15 20 0 7 -5 6 -15 -2 -8 -7 -15 -8 -15 -2 0 5 6 15 14 21 11 9 16 5 25 -18 7 -16 12 -35 11 -42 -2 -8 -2 -71 -1 -141 l1 -128 433 1 c237 1 497 4 577 8 l145 6 -4 223 c-2 123 0 261 4 307 6 79 8 85 29 85 l23 0 7 -331z m626 -4 l0 -335 -230 0 -230 0 0 335 0 335 230 0 230 0 0 -335z m148 283 c-5 -48 -24 -78 -50 -78 -4 0 -8 29 -8 65 l0 65 31 0 32 0 -5 -52z m125 -975 c-13 -2 -35 -2 -50 0 -16 2 -5 4 22 4 28 0 40 -2 28 -4z m140 0 c-13 -2 -33 -2 -45 0 -13 2 -3 4 22 4 25 0 35 -2 23 -4z m129 -31 c10 -10 2 -69 -11 -90 -12 -19 -140 -34 -294 -34 -81 0 -151 3 -154 6 -4 3 -8 30 -11 60 l-4 54 43 6 c120 16 414 15 431 -2z m-2722 -47 c0 -25 -2 -45 -4 -45 -2 0 -41 7 -86 16 -95 18 -120 12 -33 -8 110 -25 390 -11 360 18 -3 3 -15 0 -27 -6 -11 -6 -52 -14 -91 -17 l-69 -6 0 47 0 48 43 -7 c116 -18 182 -53 145 -77 -69 -44 -422 -29 -423 18 0 5 -4 14 -8 21 -5 7 4 15 25 22 52 16 70 19 121 20 l47 1 0 -45z m-95 -66 c67 -14 241 -14 284 0 19 6 36 9 38 7 7 -6 -16 -288 -28 -343 -11 -57 -9 -56 -119 -68 -60 -6 -197 8 -211 22 -14 14 -37 162 -46 291 -8 111 -8 113 12 107 11 -3 43 -10 70 -16z m2781 -51 c-3 -24 -10 -95 -16 -158 -6 -63 -15 -125 -20 -137 -13 -31 -78 -46 -175 -40 -96 6 -112 12 -130 46 -17 33 -41 153 -49 246 l-7 70 118 -3 c65 -1 145 2 178 7 111 16 108 17 101 -31z m-389 -190 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-2357 -170 c62 -11 192 -4 235 12 43 16 43 2 -1 -16 -74 -32 -324 -18 -324 18 0 6 7 7 18 3 9 -4 42 -12 72 -17z"/>
                <path
                    d="M1422 2779 c-9 -15 -8 -20 6 -28 14 -8 17 -23 15 -90 -1 -45 2 -81 6 -81 11 0 21 26 21 55 0 39 19 39 74 1 29 -20 56 -36 59 -36 18 0 3 28 -28 51 l-35 27 25 16 c31 20 33 56 4 82 -30 27 -131 29 -147 3z m123 -23 c24 -17 14 -43 -20 -52 -38 -9 -55 2 -55 36 0 26 3 30 28 30 16 0 37 -6 47 -14z"/>
                <path
                    d="M1987 2783 c-4 -3 -7 -15 -7 -25 0 -10 -7 -18 -15 -18 -17 0 -20 -16 -5 -25 6 -3 10 -25 10 -49 0 -48 25 -81 54 -70 20 8 16 29 -5 29 -17 0 -25 70 -11 88 5 7 7 27 5 45 -5 31 -13 39 -26 25z"/>
                <path
                    d="M2874 2765 c-3 -14 -12 -25 -20 -25 -16 0 -19 -16 -4 -25 6 -3 10 -24 10 -46 0 -44 29 -83 55 -73 19 8 14 29 -6 29 -22 0 -25 74 -3 89 12 9 14 15 6 20 -7 4 -12 18 -12 32 0 31 -18 31 -26 -1z"/>
                <path
                    d="M1645 2715 c-33 -32 -33 -79 -2 -100 38 -25 79 -28 117 -8 33 17 36 17 53 1 19 -20 77 -24 108 -8 11 6 19 21 19 36 0 25 -10 31 -85 58 -16 6 -17 9 -5 16 9 6 24 3 42 -8 34 -20 48 -9 23 18 -22 24 -67 26 -89 4 -29 -28 -17 -46 42 -65 57 -18 58 -33 5 -37 -35 -3 -43 0 -43 14 0 13 -7 15 -32 11 -18 -2 -46 -10 -63 -17 -24 -10 -36 -9 -60 1 l-30 13 45 4 c24 2 50 8 57 14 20 16 15 45 -9 62 -32 23 -65 20 -93 -9z m83 -22 c2 -9 -9 -13 -40 -13 -40 1 -42 2 -23 16 23 17 56 15 63 -3z"/>
                <path
                    d="M2230 2703 c-14 -47 -2 -85 35 -109 23 -15 27 -15 50 0 14 9 25 12 25 6 0 -5 6 -10 14 -10 12 0 13 12 9 58 -2 31 -7 63 -9 70 -7 24 -24 1 -24 -32 0 -19 -9 -44 -19 -57 l-20 -24 -22 22 c-17 17 -20 28 -15 57 9 48 9 50 -3 54 -5 2 -15 -14 -21 -35z"/>
                <path
                    d="M2371 2733 c6 -58 27 -148 35 -146 5 1 12 23 16 48 8 55 22 75 54 75 15 0 24 6 24 15 0 23 -50 19 -77 -7 l-23 -21 0 21 c0 13 -6 22 -15 22 -8 0 -15 -3 -14 -7z"/>
                <path
                    d="M2697 2673 c5 -67 18 -100 27 -72 2 8 10 34 18 59 10 34 18 45 33 45 16 0 22 -10 29 -53 6 -29 14 -51 20 -49 13 5 9 83 -5 109 -14 26 -47 32 -74 14 -22 -15 -25 -15 -25 -1 0 8 -7 15 -15 15 -12 0 -13 -12 -8 -67z"/>
                <path
                    d="M1276 2715 c-3 -8 -12 -15 -21 -15 -17 0 -20 -16 -5 -25 6 -3 10 -14 10 -24 0 -13 9 -17 35 -18 31 -1 35 2 35 23 0 13 5 24 10 24 6 0 10 5 10 10 0 6 -9 10 -20 10 -11 0 -23 7 -26 15 -4 8 -10 15 -14 15 -4 0 -10 -7 -14 -15z"/>
                <path
                    d="M2095 2718 c-52 -28 -63 -96 -19 -124 24 -16 26 -16 52 3 28 20 28 20 52 1 29 -24 41 -7 15 22 -12 13 -15 27 -10 48 11 51 -39 79 -90 50z m65 -27 c0 -17 -46 -76 -60 -76 -21 0 -24 49 -5 69 17 17 65 22 65 7z"/>
                <path
                    d="M2539 2701 c-34 -35 -38 -72 -9 -101 25 -25 32 -25 61 -1 23 19 24 19 48 0 32 -26 51 -9 22 20 -15 15 -19 28 -15 51 13 63 -55 83 -107 31z m81 -16 c0 -22 -55 -79 -68 -71 -17 10 -15 47 5 68 20 22 63 24 63 3z"/>
                <path
                    d="M3016 2715 c-3 -8 -15 -15 -26 -15 -24 0 -25 -6 -5 -26 8 -8 12 -21 9 -28 -4 -10 4 -14 30 -13 27 1 36 5 36 18 0 10 5 21 10 24 15 9 12 25 -5 25 -9 0 -18 7 -21 15 -4 8 -10 15 -14 15 -4 0 -10 -7 -14 -15z"/>
                <path
                    d="M1547 2453 c-92 -128 -198 -285 -195 -289 4 -3 177 237 223 309 29 45 9 31 -28 -20z"/>
                <path
                    d="M2273 2403 c-22 -27 -90 -111 -153 -188 -62 -77 -120 -148 -128 -157 -8 -10 -12 -18 -9 -18 7 0 234 264 296 344 54 69 49 84 -6 19z"/>
                <path
                    d="M1619 2287 c-80 -110 -182 -260 -171 -253 24 14 229 303 221 311 -2 2 -25 -24 -50 -58z"/>
                <path
                    d="M1528 2303 c-13 -15 -125 -178 -151 -220 -4 -7 -6 -13 -3 -13 5 0 125 166 161 223 20 30 16 36 -7 10z"/>
                <path
                    d="M2154 2122 c-79 -88 -99 -112 -92 -112 9 0 171 181 166 185 -2 3 -36 -30 -74 -73z"/>
                <path d="M2219 2063 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z"/>
                <path d="M2284 2015 c-23 -36 -14 -38 14 -4 13 16 19 29 13 29 -6 0 -18 -11 -27 -25z"/>
                <path
                    d="M2889 2377 c-31 -28 -78 -77 -105 -107 -26 -30 0 -8 59 50 59 57 107 106 107 107 0 6 -7 0 -61 -50z"/>
                <path d="M2735 2348 l-50 -53 53 50 c28 27 52 51 52 52 0 8 -9 -1 -55 -49z"/>
                <path
                    d="M2915 2108 c-127 -132 -142 -155 -27 -43 61 60 112 111 112 112 0 13 -26 -8 -85 -69z"/>
                <path d="M2909 1993 l-64 -67 63 53 c63 54 77 69 70 76 -2 3 -33 -25 -69 -62z"/>
                <path d="M868 1203 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/>
                <path d="M938 1133 c18 -2 45 -2 60 0 15 2 0 4 -33 4 -33 0 -45 -2 -27 -4z"/>
                <path
                    d="M1025 2510 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z"/>
                <path d="M3348 2506 c-19 -14 -23 -26 -10 -26 4 0 13 9 20 20 14 23 13 24 -10 6z"/>
                <path
                    d="M781 2488 c0 -13 3 -17 6 -10 2 6 10 9 16 5 7 -4 6 1 -2 10 -18 22 -21 21 -20 -5z"/>
                <path d="M1057 2491 c-4 -17 -3 -21 5 -13 5 5 8 16 6 23 -3 8 -7 3 -11 -10z"/>
                <path d="M920 2486 c0 -8 4 -17 9 -20 5 -4 7 3 4 14 -6 23 -13 26 -13 6z"/>
                <path d="M3371 2484 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
                <path
                    d="M1011 2443 c5 -14 8 -32 5 -40 -8 -20 9 -15 30 9 15 19 16 20 1 9 -15 -12 -18 -10 -23 18 -4 17 -10 31 -15 31 -5 0 -4 -12 2 -27z"/>
                <path d="M1121 2444 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
                <path d="M3607 2439 c4 -13 8 -18 11 -10 2 7 -1 18 -6 23 -8 8 -9 4 -5 -13z"/>
                <path
                    d="M755 2440 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4 -4 -10z"/>
                <path
                    d="M830 2435 c7 -8 19 -15 26 -15 8 0 11 6 8 15 -4 8 -15 15 -26 15 -17 0 -18 -3 -8 -15z"/>
                <path d="M946 2435 c4 -8 10 -12 15 -9 11 6 2 24 -11 24 -5 0 -7 -7 -4 -15z"/>
                <path
                    d="M3371 2433 c0 -11 3 -13 6 -5 2 6 10 9 15 6 7 -4 8 -2 4 4 -11 18 -26 14 -25 -5z"/>
                <path d="M715 2418 c4 -13 11 -27 16 -33 5 -5 4 5 -2 23 -12 36 -24 44 -14 10z"/>
                <path
                    d="M3334 2410 c0 -11 1 -20 2 -20 1 0 9 3 18 6 13 5 13 8 1 20 -18 18 -21 18 -21 -6z"/>
                <path d="M3446 2421 c-3 -5 1 -11 9 -14 9 -4 12 -1 8 9 -6 16 -10 17 -17 5z"/>
                <path
                    d="M3634 2409 c0 -13 7 -19 21 -18 11 0 14 3 7 6 -6 2 -10 8 -7 13 3 4 -1 10 -8 13 -8 3 -13 -3 -13 -14z"/>
                <path
                    d="M770 2401 c0 -5 7 -11 15 -15 8 -3 15 -1 15 3 0 5 -7 11 -15 15 -8 3 -15 1 -15 -3z"/>
                <path
                    d="M897 2395 c-4 -8 -2 -17 3 -20 6 -4 10 -4 10 -1 0 2 3 11 6 20 3 9 2 16 -4 16 -5 0 -12 -7 -15 -15z"/>
                <path d="M955 2391 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z"/>
                <path
                    d="M1060 2394 c0 -3 7 -12 15 -20 13 -13 15 -13 15 -1 0 8 -7 17 -15 21 -8 3 -15 3 -15 0z"/>
                <path d="M3492 2380 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
                <path
                    d="M3556 2391 c-4 -6 -2 -11 3 -11 6 0 11 -10 11 -21 0 -17 3 -19 14 -10 11 9 15 9 19 -1 4 -8 6 -7 6 5 1 9 -6 17 -14 17 -7 0 -18 7 -23 16 -6 11 -11 13 -16 5z"/>
                <path
                    d="M833 2374 c9 -11 14 -23 11 -26 -3 -3 -1 -8 4 -12 18 -11 8 25 -12 41 -21 18 -21 18 -3 -3z"/>
                <path
                    d="M760 2370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"/>
                <path d="M1212 2359 c-19 -30 -11 -32 11 -3 10 13 14 24 10 24 -5 0 -14 -9 -21 -21z"/>
                <path d="M916 2361 c-12 -5 -15 -10 -9 -14 6 -4 16 0 23 8 14 17 13 17 -14 6z"/>
                <path
                    d="M1056 2354 c-4 -9 -4 -19 -1 -22 2 -3 7 3 11 12 4 9 4 19 1 22 -2 3 -7 -3 -11 -12z"/>
                <path
                    d="M1105 2359 c-4 -6 -4 -13 -1 -16 3 -4 6 -1 6 6 0 7 5 9 12 5 7 -4 8 -3 4 4 -9 15 -13 15 -21 1z"/>
                <path
                    d="M1153 2363 c-22 -8 -15 -33 10 -32 17 1 18 2 4 6 -14 4 -16 8 -6 19 12 15 11 15 -8 7z"/>
                <path
                    d="M3280 2356 c0 -8 5 -18 12 -22 7 -5 8 -3 3 6 -4 7 -2 16 6 21 11 7 10 9 -3 9 -10 0 -18 -6 -18 -14z"/>
                <path d="M3655 2360 c-4 -6 3 -10 14 -10 25 0 27 6 6 13 -8 4 -17 2 -20 -3z"/>
                <path d="M996 2328 l-18 -33 21 25 c18 22 26 40 18 40 -1 0 -11 -15 -21 -32z"/>
                <path d="M880 2341 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z"/>
                <path
                    d="M3410 2327 c-12 -21 -12 -21 6 -7 10 8 20 15 22 16 2 1 -1 4 -5 7 -5 3 -15 -4 -23 -16z"/>
                <path d="M750 2333 c0 -13 29 -38 35 -31 3 3 -4 13 -15 23 -11 10 -20 13 -20 8z"/>
                <path d="M802 2320 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
                <path
                    d="M1031 2328 c0 -9 4 -20 9 -23 16 -10 12 -38 -5 -31 -8 3 -15 1 -15 -4 0 -6 5 -10 10 -10 6 0 10 -13 10 -30 0 -32 -19 -80 -32 -80 -4 0 -8 -8 -8 -17 0 -11 8 -6 25 17 17 23 25 47 25 73 0 34 2 38 15 27 13 -10 18 -11 28 -1 7 7 8 12 2 11 -25 -5 -35 2 -35 25 0 14 -4 25 -9 25 -5 0 -12 8 -14 18 -4 15 -5 15 -6 0z"/>
                <path d="M3633 2315 c0 -8 4 -12 9 -9 4 3 8 9 8 15 0 5 -4 9 -8 9 -5 0 -9 -7 -9 -15z"/>
                <path
                    d="M3694 2307 c1 -13 5 -28 9 -34 4 -6 2 -15 -4 -19 -8 -5 -7 -9 2 -14 9 -6 10 -12 1 -22 -7 -10 -8 -18 0 -28 8 -13 9 -12 5 2 -3 9 1 22 9 29 12 10 12 14 2 21 -11 6 -11 10 0 17 11 6 10 10 -3 15 -12 4 -14 10 -7 19 7 8 6 16 -3 24 -11 10 -13 8 -11 -10z"/>
                <path
                    d="M700 2310 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z"/>
                <path d="M832 2295 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/>
                <path
                    d="M946 2305 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0 -6 -7 -10 -15z"/>
                <path d="M1127 2313 c-4 -3 -7 -13 -7 -22 1 -13 3 -13 11 2 11 19 8 33 -4 20z"/>
                <path d="M1177 2313 c-4 -6 0 -19 8 -29 11 -15 14 -16 15 -4 0 21 -16 44 -23 33z"/>
                <path d="M3245 2310 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"/>
                <path d="M3448 2313 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
                <path
                    d="M1070 2295 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10 -7 -10 -15z"/>
                <path
                    d="M758 2271 c-10 -12 -13 -23 -7 -32 7 -11 9 -11 9 -1 0 7 5 10 11 6 8 -4 9 1 4 17 -7 22 -7 23 11 9 18 -14 18 -14 5 3 -16 21 -13 21 -33 -2z"/>
                <path
                    d="M807 2272 c3 -13 11 -26 17 -28 7 -3 13 -28 14 -56 1 -29 6 -56 11 -61 5 -5 6 3 3 19 -4 21 -2 25 9 19 11 -6 12 -5 2 6 -7 7 -13 30 -13 51 0 22 -5 38 -11 38 -7 0 -18 8 -25 18 -12 15 -12 15 -7 -6z"/>
                <path
                    d="M1148 2285 c-4 -4 -4 -13 -2 -20 5 -13 -12 -30 -31 -30 -5 0 -11 -13 -13 -29 -3 -22 -6 -26 -13 -15 -7 10 -8 8 -7 -10 2 -13 -3 -26 -10 -28 -8 -3 -10 2 -6 14 5 14 4 15 -4 3 -6 -8 -9 -17 -7 -20 2 -4 -9 -20 -25 -35 -18 -17 -30 -23 -30 -15 0 21 -13 2 -16 -23 -10 -77 -11 -130 -3 -108 5 13 8 40 7 59 -2 26 4 39 22 54 63 51 102 91 110 114 6 15 15 22 22 18 6 -4 8 -3 4 4 -3 5 -1 12 5 14 6 2 9 16 7 32 -1 15 -6 25 -10 21z"/>
                <path
                    d="M3235 2281 c-3 -5 0 -13 6 -17 7 -4 9 -3 5 4 -3 5 0 13 6 15 9 4 10 6 1 6 -6 1 -14 -3 -18 -8z"/>
                <path d="M630 2276 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21 13z"/>
                <path
                    d="M3137 2273 c-13 -13 -7 -33 11 -33 13 0 14 2 3 9 -7 5 -10 14 -7 20 8 12 3 15 -7 4z"/>
                <path d="M3322 2261 c-11 -7 -10 -10 3 -15 22 -8 22 -8 22 9 0 17 -6 18 -25 6z"/>
                <path
                    d="M3575 2250 c-3 -6 1 -7 10 -4 11 4 14 2 9 -9 -3 -8 0 -18 5 -22 6 -3 9 -11 6 -16 -4 -5 -1 -9 4 -9 14 0 14 13 -1 28 -8 8 -8 15 2 27 10 13 9 15 -8 15 -12 0 -24 -4 -27 -10z"/>
                <path
                    d="M720 2242 c0 -8 -5 -10 -12 -6 -7 4 -10 4 -6 0 3 -4 9 -7 12 -7 16 2 45 -38 51 -72 5 -24 11 -34 15 -27 4 7 13 9 19 6 6 -4 11 -2 11 3 0 6 -7 11 -15 11 -8 0 -15 8 -15 18 0 9 -14 33 -30 52 -16 19 -30 29 -30 22z"/>
                <path
                    d="M905 2201 c1 -31 25 -111 34 -111 3 0 7 26 7 58 2 56 2 56 -5 12 l-7 -45 -8 37 c-5 21 -6 44 -3 52 3 8 0 16 -6 19 -8 3 -12 -5 -12 -22z"/>
                <path d="M992 2190 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
                <path
                    d="M3478 2198 c8 -9 11 -22 7 -28 -3 -5 -1 -10 4 -10 17 0 13 26 -6 41 -16 13 -17 12 -5 -3z"/>
                <path
                    d="M704 2184 c1 -8 8 -20 16 -27 12 -10 12 -9 2 5 -10 13 -10 17 0 20 8 3 7 6 -4 10 -10 4 -15 2 -14 -8z"/>
                <path
                    d="M3311 2162 c-7 -14 -4 -20 15 -29 15 -7 26 -8 30 -1 3 5 -4 12 -16 15 -13 3 -19 11 -16 19 8 20 -2 17 -13 -4z"/>
                <path d="M3670 2176 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z"/>
                <path
                    d="M1165 2162 c-5 -4 -17 -16 -25 -27 -11 -15 -7 -14 13 4 24 22 32 31 25 31 -2 0 -7 -4 -13 -8z"/>
                <path d="M3229 2143 c-13 -16 -12 -17 4 -4 16 13 21 21 13 21 -2 0 -10 -8 -17 -17z"/>
                <path d="M3610 2156 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21 13z"/>
                <path d="M1100 2140 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z"/>
                <path d="M3681 2124 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
                <path
                    d="M3228 2123 c-16 -4 -16 -6 -4 -19 16 -16 62 -19 71 -5 3 5 -8 8 -24 6 -23 -3 -29 -1 -24 11 3 7 4 13 2 13 -2 -1 -12 -3 -21 -6z"/>
                <path
                    d="M3153 2093 c2 -24 5 -29 15 -21 7 6 9 14 4 17 -5 3 -12 13 -15 21 -3 8 -4 1 -4 -17z"/>
                <path
                    d="M3655 2110 c3 -5 1 -10 -5 -10 -6 0 -8 -5 -5 -10 4 -6 11 -8 16 -5 12 8 11 35 -2 35 -5 0 -7 -4 -4 -10z"/>
                <path d="M730 2085 c13 -14 25 -25 27 -25 9 0 -33 49 -41 50 -5 0 1 -11 14 -25z"/>
                <path
                    d="M1071 2080 c-18 -17 -40 -30 -47 -30 -18 0 -27 -17 -13 -26 7 -4 9 -3 6 3 -4 6 3 13 16 17 24 6 99 66 82 66 -5 0 -25 -14 -44 -30z"/>
                <path
                    d="M1150 2099 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z"/>
                <path
                    d="M3540 2091 c13 -10 13 -12 0 -21 -13 -8 -12 -10 3 -10 22 0 19 31 -3 37 -13 4 -13 3 0 -6z"/>
                <path
                    d="M784 2071 c4 -5 0 -12 -6 -14 -7 -3 0 -6 16 -6 24 -1 27 1 16 14 -13 16 -35 21 -26 6z"/>
                <path
                    d="M3618 2070 c17 -20 15 -33 -4 -26 -14 5 -15 4 -4 -9 10 -12 10 -15 -5 -15 -11 0 -15 -5 -12 -14 4 -9 -1 -17 -11 -19 -12 -3 -9 -5 7 -6 16 -1 22 3 18 13 -4 9 2 17 14 21 10 4 17 11 13 16 -3 6 3 13 15 16 12 3 21 9 21 14 0 5 -7 6 -15 3 -8 -4 -23 0 -33 7 -14 11 -15 11 -4 -1z"/>
                <path
                    d="M910 2049 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z"/>
                <path d="M840 2040 c-13 -8 -12 -10 3 -10 9 0 17 5 17 10 0 12 -1 12 -20 0z"/>
                <path
                    d="M3281 2038 c-1 -20 14 -24 25 -6 4 6 3 8 -4 4 -5 -3 -13 0 -15 6 -3 8 -6 6 -6 -4z"/>
                <path d="M3467 2039 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z"/>
                <path d="M3501 2034 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
                <path
                    d="M770 2033 c0 -16 25 -23 41 -11 11 8 11 9 -2 5 -9 -3 -22 0 -28 6 -8 8 -11 8 -11 0z"/>
                <path d="M857 2019 c-10 -11 -17 -25 -15 -30 2 -6 14 4 26 20 25 34 17 41 -11 10z"/>
                <path
                    d="M3343 2030 c2 -8 14 -15 27 -15 13 0 25 7 27 15 3 9 1 11 -4 5 -13 -16 -35 -17 -45 -3 -7 10 -9 10 -5 -2z"/>
                <path d="M3233 2005 c-3 -9 -3 -18 -1 -21 3 -3 8 4 11 16 6 23 -1 27 -10 5z"/>
                <path
                    d="M3310 1968 c0 -20 25 -24 36 -6 5 7 3 8 -6 3 -7 -4 -16 -2 -21 6 -7 11 -9 10 -9 -3z"/>
                <path
                    d="M3504 1951 c0 -11 4 -17 8 -15 4 3 8 12 8 20 0 8 -4 14 -8 14 -4 0 -8 -9 -8 -19z"/>
                <path
                    d="M1495 1780 l-250 -5 0 -274 0 -275 270 2 c149 1 417 5 598 8 l327 7 0 273 0 274 -347 -2 c-192 -1 -460 -5 -598 -8z m925 -17 c3 -2 7 -118 9 -257 l3 -253 -580 -8 c-320 -4 -585 -4 -591 -1 -10 6 -8 502 2 512 3 3 211 8 463 12 439 7 683 5 694 -5z"/>
                <path
                    d="M1515 1720 l-220 -5 2 -204 c2 -112 5 -207 9 -210 3 -3 245 -6 537 -6 l532 0 0 217 0 218 -320 -2 c-176 -1 -419 -5 -540 -8z m845 -157 c0 -82 3 -172 6 -200 l7 -53 -532 0 -531 0 0 195 0 194 118 4 c64 1 300 4 525 5 l407 2 0 -147z"/>
                <path
                    d="M2686 1782 c-3 -5 -2 -131 1 -281 l6 -271 196 2 196 3 4 25 c2 14 0 139 -4 278 l-7 252 -194 0 c-106 0 -195 -4 -198 -8z m377 -124 c4 -62 7 -179 7 -261 l0 -147 -182 2 -183 3 -3 258 -2 257 178 0 179 0 6 -112z"/>
                <path
                    d="M2760 1662 c0 -33 3 -120 7 -195 l6 -137 124 0 123 0 0 195 0 195 -130 0 -130 0 0 -58z m248 -139 l2 -183 -115 0 -115 0 0 93 c0 52 -3 135 -7 186 l-6 92 119 -3 119 -3 3 -182z"/>
                <path
                    d="M2760 719 c-576 -9 -1809 -29 -2105 -35 -135 -2 -221 -8 -223 -14 -2 -6 64 -10 188 -10 l191 0 -33 -40 -33 -40 -157 0 c-99 0 -158 -4 -158 -10 0 -6 58 -10 155 -10 l155 0 0 -34 0 -33 -106 -6 c-58 -3 -110 -9 -114 -13 -12 -12 1178 -8 1905 6 314 6 816 10 1118 11 482 0 586 4 535 22 -7 2 -75 2 -150 -1 l-138 -5 0 50 0 50 113 10 112 10 -115 1 -115 2 -27 34 c-16 19 -28 37 -28 40 0 4 50 6 110 6 61 0 110 4 110 9 0 10 -501 10 -1190 0z m979 -56 c37 -43 41 -54 41 -100 l0 -53 -178 0 c-98 0 -314 -3 -480 -7 l-302 -6 0 66 c0 56 -4 70 -26 97 -15 17 -29 28 -32 25 -3 -3 4 -16 17 -29 l22 -23 -108 -6 c-205 -12 -774 -29 -780 -23 -3 3 -7 21 -9 39 l-4 34 122 7 c68 3 323 9 568 12 245 3 447 8 449 10 2 2 152 4 332 4 l327 0 41 -47z m-1849 -21 l0 -39 -157 -6 c-322 -14 -953 -20 -953 -11 0 6 15 25 34 43 l34 33 329 7 c180 4 415 8 521 9 l192 2 0 -38z m910 -87 l0 -55 -188 0 c-104 0 -305 -3 -446 -7 l-257 -6 3 49 3 49 320 7 c176 4 329 9 340 11 11 2 66 5 123 6 l102 1 0 -55z m-910 -20 l0 -45 -565 0 -565 0 0 34 0 33 338 10 c185 5 439 10 565 11 l227 2 0 -45z"/>
                <path d="M2860 618 c0 -5 203 -8 452 -8 248 0 448 3 444 8 -10 9 -896 9 -896 0z"/>
            </g>
        </svg>
    )
}

export default RestosSvg