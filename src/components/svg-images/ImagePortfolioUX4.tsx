type ImagePortfolioUX4Props = {
  title: string;
  extended?: object;
};

const ImagePortfolioUX4 = ({ title, extended }: ImagePortfolioUX4Props) => {
  return (
    <svg
      width='inherit'
      height='inherit'
      viewBox='0 0 416 234'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...extended}
    >
      <title>{title}</title>
      <path d='M0 0H416V234H0V0Z' fill='url(#pattern16)' />
      <defs>
        <pattern
          id='pattern16'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_4247_1103'
            transform='scale(0.00240385 0.0042735)'
          />
        </pattern>
        <image
          id='image0_4247_1103'
          width='416'
          height='234'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaAAAADqCAIAAABr4AawAAAACXBIWXMAABYlAAAWJQFJUiTwAABI3ElEQVR4nO2dd3wURf/HZ2bb9Vwa1YJKs+vD83sa+ljQR31sjyBif8SCIoKCoPSqIIqiYAFUQECaNBXBLioginTpvYSEtEuubZ/5/bE8l81eySW5S0Iy7xd/7M7Ozs4dt59M+RZICAEUCoXSGEH13QEKhUJJF1TgKBRKo4UKHIVCabRQgaNQKI0WKnAUCqXRQgWOQqE0WqjAUSiURgtb3x2gUBoKv/72+8qVK48ePer1ejt3vqrHPd3qu0eU2gKpoS+FAgBYtvyzbl3vNJcMHzF63NhR9dUfSkqgAkehgJLS0pzs7Ojy1V9+c/NNN9R9fyipgq7BUSjgu+/WxCn/tm47QkkxVOAoFPDHH39Ejnv2fCxyPOm1ifXRHUrKoFNUCgVACCPHn69cffttt0RODx46fP55beqhT5RUQEdwFEolOnZsbz4tKDhVXz2h1B4qcBRKJbKzs8yn5eX++uoJpfZQgaM0dSRZNp86HI7HHu9VcVUS67xHlJRBBY7S1LEJgqWEYZjIsabp6XioJEnpaJZigQochWKlqLBi3U2Ikj8zR44eW7vuF8sYMAErPl15T497IYR2u/32O+6c8f7MWnWUUhV0F5VCqbSLKsmyeUz3zbff39DluipvrPI92vHHrlcmTJg/f56l/KGHH5k8+fXsrKyYd1FqCR3BUSiVOHbsuPn0nHPOjlfTLIuTXn8zQZufLFl+2aUXR6sbAGDunNljxoyrdi8pyUEFjtLIWbDwk6HDRkIIn+v//Nx5C6qsv3HjJvNpmzbnxqz2x87d5tNBA/vHa/Dj+Yvu6d41wROnTnnz199+r7JjlJpAKJRGyqbNW2+77XbLD/7ee+8vKi6x1HzhxaGRCt263Z3kC/Li4GGRasuWfxqzzqzZc6Nfuo/mfLzx98033XRzpOTj+YtS9rEpJqjAUeqanbt29376GQDA4CHD0vqgeH/Uo5/72qTJMWu+8+70xI/4ZMlyQsgPa36OefXzlastDQ54/oVSn8+4+vzAFyPl738wq3aflRIbKnCUFPPTz+v6PTsAANC3X/+f166PrvBIz0cjL/Y33/6Qpm5MfnNqPIEDABjCFCHe1HXL1u0xG1+77pcNv25M3IEDBw9ZWhsxckzk6vpffjVf+ubb72v9iSkxoAJHSSVLl31qeasXLV5qqTNk6IjI1RcH12oQt237Hw89/AgA4O13plku/fvft0aeMnbc+E+WLLd0zFx53foN0erW68neMR866IUhRoXnB76YoG9GxyKMHDXW1O0d5kuXX355DT8/pSqowFFShqwoHTteGK0Ue/buM1ezaI3fHzBf3b1nb2TwtWr11wke9+Zbb5vbKThVGLnk9wfMlw4dPkII+XntenOheRB3qrAoutvr1m+Ifuhnn68y1wkEgjH7Nm36B+Zqz/V/PnJp1eqvLQ+a/dG8BB+TUhuowFFSxqrVX0XLBACgb7/+5mqhUCim0CxctMRyY8+ej1keseOPXR/PXzRseIxAu0uXVSzzFxWXmC+VlZUb5eZtgfvvfzBSPz/Ko/61SZOjP+D7H8yyVNu5a3d0td8q78OC/40Wd+/ZG93zF14cWs2vmVINqMBRUsbb70yLvLcjRo4xv8a/bdxkrjl4yPDIpaf79Bs5amy0YAEAHnzov5Fb4u0DxFMK86VfNvxmFH75VaUAltOmf2CUjx7zkrm837MDoj/docNHox/65VffRte01Plt46YlS1c80eup6NsHDhpcu6+cUgVU4CgpY+Krr0de3VWrv3r8iScjp6PHvGSu+fU33yVWKwPzGn8y9c2PePa5AZHyp/v0MwrnL1hsrt+jx3379h+MHpcNHzE6+tMNHTYy+omTXn/TUu2NyVPMFczhMy1Mffu91HzvlPhQgaOkDPMga8WnK5ct/8z8PmuaZlRbu+4Xi62Zhad69/n0sy8sjb8ycVJ0TbOlBagscM/1f9586ZGej/73kUdB0liebh6cJqi5e8/eZBrv2++5TZu3pPjbp8SCChwlZZiHQsa2pvmtjpiM/POf18R781+bNNmyIxGh4FShuWavJ3ufKiwihDzVu0+01mzavCUZoUmA+dGLFi9NUPOrr0/PUg8fOfqPf3RO3OzIUWP37tufji+fEhMqcJSU8cWqik0Gw8Zi4KCKEdYbk6cY1WK++S+Pn4gxTtz+1Lffi9agD2d+FF34TN9nEwvNnXfelbjCvv0HjKZ+2fCb5dKaH9daBoNP9e7Tf8DAmO081buPZfVt9569afn2KbGgAkdJGXv27jO/yaIoWsY+RjWLeYfBSy+/UmX7J0/mm28xjD/27ttvLlyw8JPDRyrtBtx4478szzJGl599viqiU4NeGGKxTVu1+itCSN7Jk5Z7jb3ab779PvojxGTS629a1vg++HB2Gv8PKJWhAkdJJeedd37kTTas883vdmFRsVFt3/4D+fkFc+bON18NhUJVtm+uv3bdL0Zh4vEaISQUCq35ce3sj+Z9NOdjX1lZvMbN480pU98lhFi2CKbP+DBSOeaaYDLMmj23Fl8wpXpQgaOkkr79nou8yaNGjyOVJenzlavNlS3WZx/O/KjK9s31V3y60ijc+PvmeGry3rT3k++82Tq3/4CBY8eNNzdldrQyiDkUrZKIUR6lDqAC19TRNG3zlm2EkJTs630052Pzy0wIGT6iwrR13EsTLPUtthcRR/R4mCt//8OPkfKZs+ZES8kzfZ+tVue//+HHBMKk63r0LfsPHJw7b8GUqe/2erJ3zLvM+7z33nt/tfpDqT1U4Jo0U6a+a34bu93d/aef19WmwYOHDlsEzmx69kjPRy31N/y60Vx/6LCRCRq32PpaHLlWfLrSbH0SMeJNnugVtwjbd+ys8vZ5Hy80PvJtt98RufHb79bIirJt+46du/ZUtz+U2kMFrukycNDgmC/zD2t+qk2z5qYGDnpx+46dFsmzYPa9BwC8+dbb0XV+27jJbLgbrylCSFFxiSiKKel8hPkLFlerkT7P9IvcGx0FgFKXUIFrolhs+s3ceOO/Ika5NcCyaXgir9KwSFYUS33LpicAYMjQEXknTxpXf1jz89N9+oEoNm3eWvMPH59oh6rEg8qYfPDhbHML+/YftFQQRVFR1BR1mZIIKnBNlHt63Gt+Cc1uVQCAOXPnV9lCWVm5ERPt2+/WmAXRMtF7b9r75lPDOtdCArWNycovvkzhVxEhGAxGP6tmTVka+eDD2Zs2b5k+48O335kW0dCYY1VKaqEC1xQJh8Pm18/Y7uzbryKrQPRimRlRFC3e6Zdeeqk5ZvfgIcPMV81z4aPHjsdsM0lpe+jhR9Ln5DRqtDX5S7xQvVWS5AZrcYk1eDoltVCBa4ocOnzE/JoZoT4s2QMS+BWYQ/Ka+fGntUaF3zdV8pQyz/vyC05FNxgzcYGF22+/c+GiJWn6QkgsjwVQuxW0/gMGVfmhoifslNRCBa6JYn7NjAUvi59AvKFWArdzAEB+foFRLd7rbQlvGd2ZaHfOZ/o++8Wqr9L3VRhYnPMNLJHsqoslsoiFBQs/SVXnKfGgiZ+bItt37Lz8sksip3v27uvQvh2onOhz5649F13YIfre66/v8sMPcR2Vnu7T75233wIAbN/xx+WXXRpdIfr39vumLf/35z9FTn/Z8NtZZ7U+cOBgIBDIysq69JKLPR53sh+sphw+cvT889rEvFTLF+Rkfv6XX36zc+fOsjKf15t51lln9X+u7569+zp2aF+bZhMTCAQ3bd66d+9eQRAe+e+D6XvQGUA9CyylPrAM1iKZX8yFx0/kRd94tHJSZCP/nsVpKRLpKKYzU3SbFoeBdH3mhMS0EzaIad/bMNm2/Y933p1uCQTw5FNP13e/6hMqcE0U8zsQcbE0F8azY4gnRjHLqxQ4UZLMV+vLT9NsZGfR5Zjbvg2KY8dPvDft/a5du8XT6PruYH1CM9s3Ucx2Ibt37wIAWPIYcBwbfZeqaubTSO47c6AkAICRNcbi1WBgWcKbW9nf/rbb/p1E31PP4UMVKf4uueQS8yWfz1fn3UmWX3/7/cXBw845+6zeTz2xbFmioHVNl/pWWEpsSkpLjaFEly43vDJxUpVOmtXlnXenW34G5nhBkdht0ZjviqzBb9q81fK7MlI7x2TsuPG79+z9/ocfx0941VxeZZbl9GHuxtp1v5hP/9i5q756lYDfNm4yxzWIychRY2m6VSpwDRFd13v0uM/8Y73ppptT+6ZZJIlEZfMz+OzzVZYbLY4K416aMH3Gh72f7pv4ZUuGFH666tLz0ccj3Xj3vRnmXpWUltZjx6IpKS21GCGa6dnzsZmz5kSidVKowDVEZrw/M+bPt7zcn8KnmFt+/Y23YiZVAQBIsmy+660p71RDtAAAAAwbPurl8RMT1zl2/EQKP1p1saQxNVOPvYpm5Rdfdur055j9nDL13f0HrD5hlIb1/0cxiJliDtTaLMuCZagSDyO2bYTElZ/u0++xx3uZSyKz3fkLFrdu3TrmXQ0hinfMjk1+c2p996uCeIkTzQlhKRaowDVEzD9fczw1AMDceQtS9RSLP0O8J5r9UqvURGPPceeuPZ9+9sXPa9dHfOYNiktK3n5nWmS/r2fPxxYtXpqqj1NLjI0RM4n91eoSVVVjGk4vWbqivrvW0KEC1xAx/4gPHT5iGdCJkpSqBz38357Rr40l953Z99Ncfvvtd/6+acvkN6cOHTZy1Ohx8z5emKpe1ReLFi81vNDu6XFvw/GEDwaDllAIAIBXJk6i8UiSgQpcQ8Ts9T1/weKt27abf9wz3p+ZZDuhUGjj75sJIV9/813MfdglS1dY3hxzznkAwNhx4yOVLd6altEZJR1gjC1/3jp2vDCSqJBSJVTgGiLmDU3DEt1ifZrMX+/ogBavTJxkqWOxs7VgcTU3R+UePGR4Cj8vJR6DXhhi/h/pfk+P6OhylARQgWuI5OcXmH/Wa9f9cvxEnrnk/Q9mJW4hniXBgw/91zLysgSGM/PRnI8Ng4Nt2/8wR6kFAGzdtj19Hz9lYIx1Desq1lWCdUKqyLva0IiOa0DDK1UX6mzfQHm6T7/33j297N23X/8pb70x8dXXB79YkV1Y13WEYjuirFu/4arOf4/Xco8e9z3Tt68kSQcPHvr11w2zZsa1kIjH4CHDJ4y3hk6rTwjBWAeaqisiFv26GNLkMFZEXVcJxkYViBBCDOTtLO9gnS7W4WZ4J+QEABuoM89PP6+75p9XmUv27T/Qru0F9dWfMxQqcA2UlV98efttt0ROjf8mc7SPhYuW9LgntvvhmLEvjx41POallBAIBF0uZ/raTwpCMNaxEiZSWFfCuiRqcpgooq5IBGtY1wjBABMATD9vhABECDGIYREnME4358hgHF7G7kKsYP5uGwJdu3ZbvnxZ5PSPnbsuvujCFLZPCFnx6cq7/nP7J0uW33brzXa7PYWNNxwa6J8vym233mxOzmSsNA8bXmHAsXLl5/Hu3bN7V20eHc8KDwDQrdvde/ftr1d1I1iTtVCZXJonFR6W8g+LBYfCBUfE4uNKWYEUKNHEgC6HiaYAXQNEBwRX/NM1oClYETUxoAR8UnG+WHBUzD8knzqqBkoA1uvvQ1l5593pZnVbvuLz1KrbuvUbbrrp5q533QEhvKd7V4fD8d33iVImnrnQEVzDZf6CxQ/c3yNySgjZtHnrnztdGSkpLCrOzcmOvrEGg5HBQ4a/MqFi2W7vvv3Llq0YMriS7dWM92c+8XgMs5K6AesqlsO6HNTFoB4O6VJYVyWsKQSrRNcBwTVpFCLIcKxgZxwZQmYun9EMcbZ6n7QWnCo8/7w2oigapyNHjR0zekTiW6rFbxs3/fUvVncIr9e7bfuOc84+y1x48NDhadNm2Gy2fv2eiflLa/hQgWvQWKQqFAo9+9yAD94/7Se/YOEn9/a4O/quu7vfs3TJJ8Zxt7u7R44tDB8xqmPHCy+66MIrr7gMAHDhhRft2bMbAPDWlHf69X3aqFNSWpqdlZWiT1N9CMFYA7qqK5IWLtcDPjVYpsphrGuI6ISASjPQGgMhQAzD2x0t2/CeZsjmQgwLQL3NWF9/462Bzz9nHJ97bpvfN23KyU7lf0G8v3/Tpn/wZK/HzCVP9Hoq8mM7Q4WCTlEbNJ99vsp8OvnNqTffXLEwt2rVFzHv+sc/Khan804c3/DrxnkfL3x5/ERL9vVxY0c/cH8PQ90AAEuWLiWE/LLht4i6AQDqTd0IIVjDSlgNlIj5hwIHtgQObg0VHFKCpUSVINYIIalRNwAAIUDXdDEQPLY3dHyfWl6ENTU1LVcfURQj6gYAGD5iVFrVzZweqLCw0FI5om4AACOt9RkHFbgGze233fLkUxVyM3zYYK/XGzmdO2c2xjGmZkVFRZHjDRs2uN2uB+7vMXTIC7fddluCZxmrPH/76//Vvtu1hGBdkwJS0fHgsd2hI38E8w+q4TKS/jUyoilS+Smx8JgaKKqvJbnlKyotrT788ANJ3rh5y9ZZs+e+PH5iv2cHPPTwI2++9XYgYM2CaEnY+uprb5SX+yOn2dnWSajZ4DzePKCBEyOoIaVB8fTTT0+f9m7k9IYu144cNXbsmNORPw4cPNS+XVvLLbpe6eWcNm3GlLfeAAAcPXosUhgvrX19QghRZVUsU/zFOOhXxYCuKgBrAOOUDdaqRFdVfxHEOlZVe7Nz636i+u03X0eOX5s0mee4eDU1TVu7bsP27du3bt0Sbeszb+5HP675YfHiRebApeYl1Pvvf7Br1/+0veD8SMllUTk0brnl5sjy34oVy9at39D5H3+r/meqT6jANXQuu/Ti6TM+NC+OHDlSESn38OGj0QL32qsTzKdTp0z2eDyCIIwcMTRS2KpVq/T0t2YQTQyo/iItUK5LQV0J66pc862DWnWEYE2RAyUAQNbm4jw5dfnwE3knZ836MHJ6441d4tVctfrrW/99U+LWVqxY9tnnX3TreqdxOnzEaPPVgYMGzZkzz1wSbTtp2YtYs+ZHKnCU1NPriUd37txpjMIAAHM+qgg5eeTIEUtlWVGiW3j5pTGWkssvvyyVXawZhGCsYTmshXxqeYkaLNPkMDHMO2rQGAAEYx3rEACEGIhQDUdfhBBNUUI+VHgcsTxjd9XZvuqGyt6+MdOSGVSpbgalpaXGwdZtO8y/ASMMVGQeAOIvsb3z7vQ+T5929V+/7mcAXkzmuQ0HugZ3ZjBixLBbb42xghYKhSwlu3fvja5m4YleT11/3TWp6VnNIARrqi4FVF++WHA4nHcgXHxcDfmIJtdM3QAAWNclSfKX+fzlPkkMW+bp1e6gpij+U5Ivj2gx/mCkiW3btkWOR44am6DmXXd1jS7sP2DgtOkf3N39nkjJOeecYxzMnVtpsPbcs8+899575hKzQZKZzqZh3apVX1jSqjV8qMCdGeRkZ7308vjo8l9//cVSsnVrxUvy30cevemmmy0Vnuv//KuvvpLyHiYP1jVdDqmBQunUkVDe/nDhUTVcDnSt6jvjQzBRVTXoLy8tOVVaXBgoL1dlGdfCsoFgXVMkxXdKk0ME16pvybN71x+R4wsvTGTZ2+/Z54yDwUOGz1+w2HAZfuP116655uolnyyOVDO2jH7Z8Nsbr1ekv1j8ybJ5Hy8075DOnbcg3oMuv+zSjh0rerJnz77kP05DgE5RzxiuuPzStet+sSyULF60sH37DuPGjjZON/y6sV/fPpGrPXrce+MN1y3+ZNkff/zBMKh9+w4dOrT/y/91qsNeWyG6ppUXKr5CJVCiSoFa6loETLCmyHIoTHRMAFBEUXU4eEEADFOLRnUlVKb4TjGcHQp18aaY7X7aJnQ7vfaaq2Mapi1cuNh8mpHhAQC8++675sJOna684PzzzCUPPhA34AIA4NrrrjcMJEGsJZEGDhW4M4nO//jb5i3b/nTl5ebCl8aNeWncmFcmTjp58mRknc7glptvBADcf989ANwD6huCNTVYKhedVIIl2Fhri2XjkhIggyCCtXUvJQTouuov5VxeluUQE3dDMyWcyDsZ8V4AAJx1Vuzw7hGWr/j8wIEDhJCWLVteccXll15y0bbtO8w+D3PmzgcArPnx53lzP4oUfrHqqwkTKo3fI7kf49GmTYUaFhQUJKjZAKECd4Zx5RWX7d6z98KOHSzl5kAjBt99v6aO+lQVRJX1sF8pK5R8+boqY10FWAcptYxHCLE8b3c6dKIiCO1OJ8fbUuA/T4gcLGV9biQ4kSMjFT2NS2lppQSszXLjbuDu+GPX8GHDPvtshbnw/vsfbNa8ubnkvnu7AwBWr/7SXLhr1y7z5PTl8RP//re/JO5Yy5YtI8c+X2niyg0NKnBnHh07tD9VWPTaa5MmvRY3VdXsj+bV8zYCAAAAXZV1ya+Vl2gBnxou16RQmizaIIQcL7gyvCzPQwgFu53n+dQECNEULeTT5Rw2zQJnHr4BAOLFwgIAXHbpxdGF8+dX2kZ4/4NZLMsWFhW/OrFi6bbXk70HDexvrvbiC89X2bHMTG/kOBwOV1m/QUEF7oykWW7Oa6++0qXLDQsXLvhotjXH4GefrzKHWqoPCNZ1LAbUYKniL9VCZZocBnp6/Z8YhBi7neV5CABCKIXhj1QpxEshQAhIZ0glJrnlwnXrNyRTTdf1JUtX/PjjGnPhjOmVdk7XrvslmYfabLbIsabV0X5LqqACdwZz80033HzTDS+8MOj33zefOHECIdSuXbtbbr7R4XDUZ7cIxqqkhcrk4nw15FOlENC11A7cjGCtAIBoYze2NrsKccCqgiWRaArkhJQ3HiHJ/zWfryxy3OvJ3n/729+3bt1qWXsFADz15OMgIUuWrkjSahfjiv87Lr5nRcOEClyDY/WX33Ace0OX65Ksf9GFHS+6sGNau5Q0hGBdl4JK2Sm5OE8J+4Gup3xOijFWVVXTVAghL9iY+IO1SNxqAAD8HzV5JNF1RdLlMJtOgbNE2SOExOxthw7tIsczpr9nGZQlybLln971nzuqrgcAqGxr6XS6avC4eoTawTUsRowc8+9b/nXjDdcPeD5GHswGDtYUqeho4NA2/7HdStBX3YEbAQATEvkXuw4hoVCo+FRBwYkj+XlHg2U+TdNiViUEqJoWKC8vPHmiKP+4v6xMVdSab2yoMlbEqqvVAksstnha3K7tBS+Pj7v22vPRKgZu9z/w0KbNW5JXN1A5dkNWPcbOqhFU4BoWL40bbRxMfmPSqtVfJ6zbYCCEyGGp+Fjg4LbQiQNK0Aerv0lKCNA1TZbEoL88UF4mhcOarkc3QQjRVFlVRF3XdU0TxbCuajGfpWMtHPT7SgvD4UAoFPSVFoZCAVzTGCEY6xinPYZSJPn0i4OHJag2dMgLluyOBrNmz5354ft79+2f/dG8YcNHtW/f3lJh1eqvP543509XXlGtXp04UeG90KJFi2rdW+/QKWrDZe3atf++5V/13YsqIKqsBkvU0lNKqEyVQkRTauYhTwiRRDHkL5MVEWPI83xGZpbd4YTRm4kkEnyRQIAJjKOkhOi6rmuq4bNFjMQ0NYUQkj6rvQjPPfvMFVdckZ+fb1h4JGDC+HFdulz/448/Hj9+3OFwduzYMRLFr327tkb8BbPz6ajR42qcpmO3KQJ+mzZtatZIfUEFrmHx7nsznu7dyzg+aooa0hDBuiaH1PIi2VeoBkuJptQmZBshWFXksBhUFQUAoOuKw+kUBJvFWgJCyHIcxwmariGEWN4ebx8QQsTzPC/YFFkCAHC8wHEpMhxJJ9dec1XVlQAAANzQ5boEC7UWJ+XLLosRW2HR4qW//LL+zcmvJ3hKcUmpORJcx47WUWEDhwpcw6JNm3MjxzGDWTYECCFEEbVwmeIrUgIlqhhIwT4phAQQAuD/TDEgqDg214KCze7K8DI8w0DW4XKzDAtjRW1DCAk2R4Y3WwyHIESCzSbY7DHGg8mBEEPS7MmQWixBZa6s7P3y9Tff3fSvG4zjt95845tvf7ihy7Ux21m3rsLZ+d//vvWs1g0qylbVUIFrQPjKypYtq8ildG6b8xJUrh8IwVjVpbBSVqCU5Cu1dpKPYCiX0+mSxDAhUOB5wW6LOTrjeZ7jMj0ZXpDQGhZCyPM8z/MebyYAABCgE4yxDgCEsexLqoDlGc5WdbUGQ1ZmZrNmzQsLTxmn+fkF57U5FwCw8ffNCxcuMvveAwCOHTsWowkAAAA///xz5Phvf++cns6mEZp0pn5QVW3HH38UFhaLYri83O/3+3fs2G72oQEAfL5y9W23WmOB1CdYJ6qsBIvF/GNKqJToamrdrQgmmq7pukYIYTmOZdgUzih1XZdlWdNUAADLsrwgMAybdOvQ0eI8x9kdGL6+s8FWB3PucADA4088afmBRYgnAkXFJWaPse++X9MQ3GOqBR3B1TWbt2xdvHjJlLfesLjmWHjs8V4NSt2wJmuBErmkQPYX6YqYpDOpjjHWdcOkCyHEIJTAGQAiyEKWZVkAapT6MEHnCZFEKVBeKokhQgjHCx5vlsPlZhgmqaewPOQdDHsmjeAAALfeeqtZ4GKq25ChI3r1imtZsmzZCvPpGadugI7g6pi58xY8/ND9ydQ8cPCQJaZNvUGIGipTy06p5cVKuByrcuJ90tORdTVdksKKKOq6hjEBACKWtdntNruNYTlU43C7cZ6oa5oxOuN5IXrequs44Pf5y0plWSSYMCzryfB6M5uxXFKDRM6V6WzdTsg5J3VdriOGjxgdHcw5wpof117zz7izTllRbEKFYfPkN6c+9+wzKe5f+qEjuLpj+46dyajbiJFjzLGk6xOCdV1TS/NkX6EWKtNVieixjc6AscVACMZYUWRZEqVwWFZkrKkRo10IGVEMCgLvcnsFu4Nlk50hGi2DOKM6AoAiy+GgPxwOQojcLq/D7bIs3iEIEWIQhBBAgCCAECEWQJBUThlW4Dw5jDO9nvZp4qVxo5s3b27OAwkA6Nuvf9eud117zdWJ750+vVIim+7du6W+f+mHClzd8d1338e79PgTT3q9mR06dLjuumsawsCNYJ1oshou10LlSvFJRfQn3kzAhGiapquKLEmSFJIlUVFkgi1SqGmarCmirmGXjh1OZzKOjRhjVdOwrkGAOJ6L9qInhMiSGAqUh8MhiBAEUHDYUOW5J0RQEOwOlwcyDCCQ4Vib3YEYpurRG0SCK5Pz5iK+Xt17a0HfZ3o//tgj69b/ekOXa3/ftKVjh/YWn7CY7Ny1+9l+FZFTX5k4qXWrlgnqN1iowNUdO3ZsjxyPHTd+xPAh9diZ+BCsa1gKKv4i1VckB408CXHXMcjpUZsiS2E5HBalkKIopvqQYU5PGHUdA0B0HYfDAUIIQpBl3TBhPhdCiKIoYjgoixJCjNPjsdmsW6uEEF3TIta8qiwRHUdH/hAEHqFMm91JCGE5luP4BDuwp7sOEeRsQnZz3ulNd7TLtGK32w0rkD93ujLJW954Y3LkuHXr1o8++kga+lUXUIGrO8wDFlWtt9zpiSBE12Q9WKr4TsllRbocJAlt8TDGmqYpshgKhqRwQFWVCts9CCBAPMdzvIAQwhiriiwrEgCAYCzL4XCQE2w2nk/kvq5jXRZDAV+prMgQQcQgjmMtAgcJYBiEEAIQMgixDB9bNCHkeI7jk9YpCAHD8Z4cLqM5OqMMRGrPa5Mmz/zw/cjphFdey82x5oQ+U6ACV3d06lSRZXLc2FHt2rV76MH76rE/VgjRRL9ceEwqP6WJVcQ4IoToGEuiGAr4xZBfU1VcaecBMgzr9mQ6nE6e5yFCBGNZkksKTymaBAjRNS0cCjAsm5mdwzBxf4SaqkqSpKgKIZjoQFVkXdMJV2lwBhHkbQ6HUyEEIgjdWZlJbh0kBjIc78l2ntOBsdVd2sCGwLyPF74waEDk9Ok+/RrWr7Sa0F3UusPvDxhJQCJ8PH/R/ffVf7YEgHVdDkuleUpJniaFia6R+MnkMSEY67IoBf1+MRzQdVXH+PQmAICIYXjBbnc4HS43x3EMw0S0Rtf1UChQVlKoKgrGGCLI84InI9PjzY7nbiXLkr/MFygr1bHOMIzHm+3JyOQF66CPEKLrOtZ1CAHDsKjWIeEgy3OeHNfZHVhnZuJJdCNj2fLPIomiAQAXXXTxqtWrzz3n7HrsUi2hAlenrPziS0us3bffmRZJrFsPEKJLQTVQrJQVq4ESXRET+5PqGKuKHPYHwmJIkUVNOz3KgxAyiOVtdrvDKdjtAi+wHBe9G6DpWqDMF/D7VEXGmDAMEgR7Zm7L6JW104/TdVEMhwJ+VZFtdofT5RYEW+31KzGs4GA9Obac1ry3OURNaIqzZOmK7nffZS5J4MJ1psCMHj26vvvQhGjfvu25bS749NPlkZJVq1YyrHDNP6vYs08HWFPUsE8pPqmUnpQDpVgRE28maLoui2LI7w8FyhVF0o19VQgYlhUEm93hdnk8DqfLbrMzbIxJIoQQQYQY1rBZwxgTQjAhDMNwPG8e61XcghDDsCzL8YLgcLh4XkCISca0o4ZAyAgOIaOZkNuKy8g9ozcWqsvsj+ZZcj/P+3jhf+6MkWv8zIKO4OqI4yfyli//dMuWTbNnzbz55lu+/HK1+SohRFFVvs7iQROMVUkuK9T8JUqgRJPDia1AjN1MSQyHg0FJDKrqaUduhBDLcoLd4XC4eJud4/kE8XUNMMahYMBfVmIkn0cI8oLNm9XM4XSd9mGwPNpwJCIEwRi+9ykEIoaxuXhPLp/dgnNlIZZP37MaGq++9oYl+8yM92c+8XjP+upPCqECVxfMX7DY8ucxJnXxf0EIxhqWQ0pZgVSYp8nBBLa7kV4pihIKlAcD5bIsnd5XhZBhGJ4XnE6Pw+3h+aqtLiJoqhr0+/3lPkkKAQAQgk53ZmZWjmBLKtGfMe4zJK/G0UHMQIgAw7I2p735uay3BSs4G35UpVSRn1/w8vgJ77w9xVz4/gezHn/skXrqUYppQksM9cWnn32RjLoBAOZ9vDBxjvHaQghRZTVQLBcekwKlSQanVDUt6C8P+H2qLBNAAAAIIpbjnO4Mh8sj2GwIIVQdRWA5zuF2qZqiKCLGGGMSCpYLNhvHcwl2VA10XVcURVMVAADLsbxgQyg5f9LYQIgQ4gTenW1rdT7vzAIovQt8DYrVX34THVF1/oLFVYbbPIOgApd2kl/IiDlHSxVY13R/kVRSoPqLNDlECE7GWx4TEgoEAn6fokhGCULQYXe5Mrx2p5NlrTsJScJxvN3pliUpHPIDALCuSyG/wAsOlztBgwSAcChY7vPJcggAwLBCTm4zm8OZrM98FIgTeKeXz2rGZ7ZieHvTUbdAIPjmW1NHjhhqLmzbtu206R90uf7M86hPABW49HLs+Anz6cBBgzt37tyqVUtFUQKBYFFRUVFRUXFxcXl52VVXXX1vj7vT1A2iiLKvQC49pYV8WJWSDL1LCNF1LRz065oKCAAQMAzrdDhcGdk2uyPmtkCSQAgFgXc4XbIY1rEGAJBlWZYlw0c1bn8wViVZUxRd0wAAGBNNVQi2gxrsq0LI2Fy2jFzOm8s6sxjBkdYFvgbFibyTZ5/V2lLYs+djQ4cNbXvB+fXSpfRBBS69WGIiPfts3zqNiUoI1lUtVK76ChR/cXVzJhBCVEXVVFnXMQCAYVi73eXxZgmGI2ftusYwrGC32xz2cDhIMNF1XZYkRVEYhk0UUYllEQuBCgEADEQQMdUOXQkZxPGc3c1nNec8uYzNiRi+6agbAGDCBGtSrkmvv/n8gGfrpTPppgkZMdYLHdq3+9vfKtLrLlmyLEHl1EKwrkkBpTRPLDgsleSpoTKiStXNCKPrOsYYAAIhZFnO4XTa7DWfEpqBEHI8b3e4GMSA09lOZUWWcPweQgQFu83h8jjdbqfL4/Jk8IKtOst/ELI858ywZ5/laHW+PbcN58xErNCk1A0AcNFFF0WOu3W7+8ef1jZWdQN0FzWtlJWXh8Ph5cs/e6bPU5HC/PyCFi2ap/vRWFd1MaCUnJR9p1QpALFeg/9ojHEoFCw+dVJVZQihzebyZuW43e5UKYKOsRgKlRSelBUZEMJxvMvtzcjK5vm4JhqGtbCmagAQhmFYhkMIJWMZBxGCrMA7vVxWc1tWK8TZm5qumTHsQubOW5DeTa0GAB3BpYtxL03I9Hpbt2r1TJ+nrrqqwo73oznz0vtgQnRVUgMlYv6h8KmjasgHdK3Gf8YQQgQgACAhABCdJHa+r27jEHI8x3M2BiFguO6rqqYlssiDEHIsZ7fb7XYHzwuISULdIIQszwhOwdvc3vI8e7PzEN+EVtxi8sKgAYSQRq9ugI7g0sSEV14bOuSFeFf3HziYrtVcQjQxIBcdU8oLlXAA6AlilhBd1wGA0RHWTI0RRZHzTxxVFBkQwvOCx5vlzcxBTGr+LhIAdF33FRf6y326pkKEbDa7NyvX7UlddEkIASPYM1sI2S14dzbkbUkFuaQ0FugILvWoqpZA3QAAc+d+nI7nElWSio8GD20Xi44qYT/AcYdCuq77y8uLC/JLCgtCQb8RTC0mDGJZhjPWuXSsq7JMQMrGcBAABCHL8ohhAISAEIxTmSwRIZZ3ZnrO7ug4uz2X0RxyVN2aHFTgUs/J/PzEFcaOGblz1+4UPhHrqhosCeUfDJ88JAdLdEUC8f0TMMaSJPl9vlAoEAyUh4MhVVFj1oUQMizDCYLhMEAwVjVVVWs+4Y0Jgqe3QQkAAGBCSC3bhxAChmUdHlvu2Y6z2gk5rVmbC7FcE5+WNk2owKUeS3iZI0djJJ389NPPU/MwjHUpKJecEE8ekotPqKHyBNJmoGmaGAoqcljTNF3XNE3DWCdxgiNBCAWbDRkbnQSrqmIkik8VBAACrIpWS3lDvM3mybU3P9fW4jzO2xLx9iYV0I1ihv7Hp4W+/fpHjufNmx89Kvn5pzW1fQYhuirLgZLwqaNSwVHRl6+JAUD0xPpAANB1TRZFHeuG8QfDMAgxMZPDG/CCnWEZAAEgAOtaKBhM1SySEIKxrioywRgQAiFACCVYE6wCiBAncA6vLauVreW5tpxzOFcWqsr3i9K4oQKXFm688cbI8fBhg7/59nsAwDRTmiJLNJFqQzBWRc1fGM47IJ46ogRLgaYkf/dpAYGQ5wTBZmO5BLa1gOM4nuMNazUd62I4oKpKSmapGGNZFBUphLEODBdXlmMZrvryBgHDMoKD9+TaW57vaN1e8LZCvL32PaSc6dC/b2nBEtXyXzd2KSwqfrLXY+3ate1y/bUAgFcmTqp564Toclgpy5cK89SQL0m/KwNo+IG6PZqmAYAdTo9gszMJfTAZxAiCQxJFXdcBAbquSaEwy3K19JzFui5LUsBfLsqiMSRkGJbjBU6oZswoCAFieYeLz2guZLdiXV76Z5sSgQpcupi/YLE5HPm4cS9NeWvyJZdcXMuxD8G6HvbLxSfE0jwsVxGANyYMw7g9GXa7AxKAGJZhGZjQ2QkxyOZwiqKoairBmBASDvoFu92YTtbkIxCiYxwO+ANlPlEKGeoGEeJ4m2B3MmzyAgcBwzC8XcjIFbJacK5syHJU3ShmqB1cGnmi11MfvD/dUvj5ytW33XpzzRokhKhl+WJRnhoo1mWxun5XFe0A8L+NiKTWu1RV9Zf5/GWlqioDABiOy8pu5nR7OI6v7nTSCO0pBgLBQLlUoW5QEFwer9fl9iQ5MDQ8EwRXFpfdknNnId6OEEv3SSkWqMClkT17913YsUN0+cxZc3o+8lC1m8O67C8SC46ogWKsJspVmnIwIeFgoNxXGg75CSEQIbcnw+PNttkdybuCGqlhJEkSQwExFFIUyVh6YxhGsDlcHq/D6eI5PgnPBIQ4nre7WVcWl5nLOTIh27S85SnJQwUu7cQcI01+c+pzzz5TjVawroX9oZMH5bICoqbSUAP8L3mzrusQQoZhEbTuqRIAFFkK+sv9ZaWqqgAIBUHweHNcHg+X3IySEKJpaigYCAdDshTSNI0QDCBgEGOzu1xuj8PpTibdH0QMIzg5dxbvzeHcOYzgoCYglATQNbhq89vGTbt27fb5fJmZmc2bN2vRokXLFs0T+M/v3rO3Y4f2L4+fOHzY4Ehh/+f6OhyOXk88mtQjCdEVSSo8rvqLSHV2S0/fDYwJaWz1IISoqiqJYUWWIEJ2u1MQBKbyPBECwLIcL9h53q5qCiBEVRQxHOIFgWWqViVd1436Ab9PkWVj4AYgYBjOZnd6Mrw2u4ONlaemEhBChuMdHs6Ty2e2YJyeJpUUhlIz6AiuGuzdt3/smLHz58f2lu8/YOCFF1502WWX/vUvf45Z4fOVq+64/VZzSVLhoQnBqij78oMn9mM5XN11t/+F31ARZFiWRYzVykzV1JDf7/eVKKoMAHQ4PRlZWXaH0zL3JAAoshz0l/lKigyF4nje483OyMxi49maEYAJxhiLYjjkLxfDQU1Tjd+bEXzJ7nB7MrNsgh2hBHZ4xj4pw7AC78m25Z7FunOaVEYYSm2gAlcNHnjw4fkfz02m5uAhw2666aZrr7EmA1zz49rrrq0o9Hq9e/bua94sN0FTRJVl38lw3gFV9Fd33Y0QIstSeVlJ0F/OMZzHm+X0ZHCVc3eJYrjMVxr0+4xAIRzHZea0cGd4magdUoyxKIrFBQWyHAQAQAjtDrc3O9fhtKqhga7pohgOBf3hUED7n+kchBAiKAg2jyfLmeFlqwzGa5jvurIcZ7VlHZnUcJdSLajAVYPqWtj3fPTxPn36dPrTFebCL1Z9Zd5FnTb9gyd7PZagEcl3UszbrwZKa2ARoul6OBgoLSxUNAlB6HBmZGRmO5wO8wdRVSXk9/vLSmVNhhA5HO6MzGyH3RHTdkTTtHAwUFR4Utc1QADDsHaXOzMr126vsKolhGiaJkuSJIZCoaCmyrquG9KMEOJ5we502x1Om83OsFyCbxRChHgb7/SyGTm8tzljczapNMyUlEAXaJPls89XRY7dbs/Ut98bO258n2f6Jbhl1swP/tzpypmz5pgLb/33TWYr323btiVoASthNVCihMproG4AGEkCMQE6IMTYSYiOl8uynN3p9GRmeTxZGd5sjzdTEIR4Us4wjN3ptNnsCBqODZoshsMBv6ZrhjuaqqqhUNBf5isrLQ76yxRZ1LXTvrEMw9gdTo83253htTucDJvIfQJCxDozbDmthRbn2rPPYu0eqm6UGkAFLlk8Hk/kOBDw932mN4Swa9euhJD8glNffvXta5Mmx7zxsUf/O37Cq+aSoqKiyPF7706N+0hCVH+x7i8FWoKwbokwlro4XjCMcnme51irsRiEkBdsTneGx5vl9njtdgfDxM0eDyFkWdbt8fK8DUIICNA1NRQsD/h8gfKystISX0lRua844PdJYkhVFWPaixDieZvL483IzHa63bxgS5CwBkKEeLuQ3dreoo2t2bmcJxc2pYwwlNRC/yomy7XXXGXJSD9i+JDI8YRXXrvgggu2bN2OENy4cZMlb+6woS8qijLw+f4lpaWbN28NBPyRSwMHDQZxIIqo+kuUcCCm/zzGWFVVTVMhAQzHsizHIKswIYR4QXB5vAzDIoQcLhfHxzDNhRBy3GnXq6oNNSCyu9yKrGCsa5qCMVYUqdxXghik6zrGuhHwCBBiOBowDMcLNrvd6XC5OEFIZDfHsAzLs4KDc2cLOa0ZBx21UWoLXYOrBuvWb7jv3nuOHz+eTOXbbr9j5eefVVltydIV3breGeMCIWrZyVDeftlfEr23gAkxDNPCoRDEwO50ONwem80RMwkyJgTrOoCQqXGgDkvXAJDCYrC8LBQqVzWF4KifEAQIMohlbILD4XDanE6eFxL5dUEEEMPZXLwnR/A247zNQSpS1lMoVOCqzcRXXx/84sCUNNX76WfefSf2FJXoavjkPqnouCaFogVOVdWgv7yspEjVFACAwAvujCxPZlZaU0dX6h4moiT6y32hQLleaQYNEYIIMTxns7vcDpdTEGxVuKxCiDib4Mrks1ry3pZIsKW575QmBBW4mlBSWrpkyfL169fN+WhWjRvp/fQz48e/5M2InX9AC5eHTuxVyk5hVY6+qihKoNzn8xVjTQMAcCzvycjyZGZxfN3ZvmIdS7IUDgbCgXJZkyEBDMOyLC8INt5uFwQbJwhVjhkhYjinl89sLmS2ZOxuiBi63EZJIVTgasuvv/2+f/+BY8eO7du396PZM5O5pdvd3bt1657IxBfrUtHRcP4hTQzE3D/Fui5Kot9XIolhQIDd6XJ5vHanM9p4Le4TCDFGXsbynOUqAca+KyEYI4aJt3CmY6xrmqYpWMcAGBsEiGEYxLAMQlWkZIYMIzhsmS357JaszYk4ASSM2kSh1AAqcCkmFAodPHTk+PETfr8/EAgEAoGBzz8XuTr7o3mdO/+9ypRaWFPDx3aJJSewIsasYNh8yLKkKQqAkON4jucTbE1a7lU1NVReLkphBJHT5Xa4XExlA1pN16VwOBwq13XicLqcLhcbx+fU+P1EfkWnO5C4HwzL8g7OlcVl5nCubFZwUGmjpAkqcOliwcJPvv76y9mzKo3pCouKc3Oyq7iTEKxIgcPb5PLCxJ6nhABAAIDVm9Xpuh4OBUsLC2RFRhB6vFkZWdm8YIu0QQiRJClQ7guUl2KCbTZ3TrNmNrsjBRsUkEEczzsyWE8W523OOb2QShslndBt+NSzbv2Gqzr/PeYln89XtcABQLBGNJlU5XYKYUUavNMTSoIRRBDCBGKEMVZkRdVUAAgmRMc6xpgQErnFyNugKoqRTtBIT2OuUBMgBAzH2Vy8M4PLzOVdOZBv0rnlKXUD3YxPPfHUDQAwoH//ktLSKu4nGGBdVxUQbX4RB0yIqqpiOBQKBEQxpKkaTngvhKfFETEMYhCMdssipEJeIcC1zOOHEOJsNne2s3Vb+zkdhayzqO0upW6gApdiVn/5TYKrX3yxcvLkKYlbIIDomkqwBpJOsaypaihQ7isqKC0uKC48FfCXqWrsVKfgtMuUwyY4WIaz2Zx2u4vjOGh1b0ARI1sEamVAByFibS5n7tmucy8Scs5meCeN4EapM+gaXIoxC8HIUWM//2zFli2bLXXy8wsSxI/DuiqVnQod2ooVOakcoYQEg/6y0lIpHMQAAwBdTpcnM8fucDJxYnVgjDVNI1hHkGFYBkW5QGi6JoVDQX+ZrmlOV0Z0DJJkgIjlXV4uqwWfkcsKLsiwdDOBUsfQNbg0MnbMyMjxRRddvGvXTuP4p5/X3dO9a7y7CCGqJGs6hoAkNWqCEMLTIgUJBBBCxEKYaMyFEOJ4HhACQexAbAxibA4nw/KEYJ7jmerZD0OEECM4GEemLbcl58qCnI1uJlDqBSpwdcR113eJCNypU6eqql69YTXH806XCyGo6zpkGKfLzQt8FRa2ACRYBYMQsgzL2FkAqs6RUOlGxDC8jXNksO5s1p3FOr2oGlmyKJQUQwUulWCMEULRid8HvTBEkios2szR06KBELI8xyBEMEwywiXHcdDl5gWbpusIIUEQkrSJS0x174csx9k9nDub9+YwriyGE6rfBoWSSuhybypBCD3830cshYNeGNKxY8epU96MlPzf/3VK0AiEkOVtiGGTVwcjHIjd7nA6XXZHEvkNUgtEgGEZm9PmaWZv0cbR6gLO24LhbFTdKPUO3WRIMYsWL723x92J6yT+zgnWdSlQtnejLgYBqVGcy7oDQoQgw3MOl5B7Fp/ViuESDU4plDqGjuBSTI97uj3+xJMJKixf8XniFiCEACKG5UBCV856B0KIOIFzZTtbnOdu28mWey7D0UAglIYFXYNLPWPHjA4GAgsXzo++NOP9mf+587aqGoAMy0PeDsL+qmrGBeu6oiiapkEIDE/VlE5aIeIE3uFh3TmsN5uzuRF1S6A0SOgUNS1gjF9/460XBg2IlNx//4MDnn/ekoAm/v1a8OhuqeS4LovV3VEFABBMQqFAOBhQFAVCyHOCJyuT5+NmWqgWRoAjzp3FZ2QzDi/kbDTTFaXBQn+aaQEhNGhg/1AoNGb0CKPkkksvS1bdAACQYV0exm/TNQXoWnWfrmNdEsPhcEBTVQCgyig2l5NluXh2v8l1CQHEsLyNd2dz3hzWlYV4e7V2QiiUuocKXBrJysqKHGtadXQKQs7pVRwepIi4+gKHCcZYwzrGBEMIMVFJlOVKdTrDIJZFnMAKLjYj05Z9DkM9SSlnCFTgUommafv2Hzxy5OjevXv3799vzph17rnnVqspxubi3BlaqIyoUnWXERiGtQkO1aYABSKIBE5go7xNkwIigBArODlHBpeRyXlykeCiE1LKGQRdg0sBmqYt/mTZZ5+uWLRoQbw6J/JOtm7VslrNquHy8PE9ki+/JrNUXZdlWddUACHH8hzHMwyq1mwSIgZxNtbptTdrzblyaMRdypkI/WtcW3797fcxo0etXr0qQZ258xZUV90AAKzNxXkyNbFcC1V7O5VhGLvdTogNGL6qcXxO4wARb+Pd2UJOS9aZiXg7QtZsqhTKGQEdwdWKk/n5rVu1SlChZ8/H/vtIz2v+2blm7WtiQMw/GC48AnS9Btup1cKwv4OsILgyucxczp2NBCdiOCptlDMXOoKrFZ98sixm+chRYy+44IJOna68+KILa9M+a3PxWc11RVQDpViR0qVxkEEcx/I2ZHOzrgzOlck5vJAT0vIsCqUOoQJXK3bs2B457vNMvzvuuOOqzn93OBwpewCEnCsLNMcQMbLvFNFVUFUc82q2jyDLs7ydcbh5TybrzGLsHsTQCSmlkUAFrlZ8+MGMyPHll1/xrxu7pPwRiOU5Ty4EEOqaFCglmpIyjWM41uZgHV7e7WVcXtaRSXdIKY0M+oNOxIiRY0pLS3Nzc1u2bNmqVcvWrVu1atWqRfNmkQovj584bOiLxrF5NJdSIGJ4PqM5ZFhy4oAcLCWanGQYpTjtQYAYhBjOk2PLbsm5cxjeTndIKY0SKnCx0XWdTRjGdsjQEeedd15OTk6kZOqUNxmGGTZsaE52VoIbawhiOHeuu62bOblf8uVrkoiIXt0NIgghQSzD2Th3lr3FOazDixiu2mkHKZQzB7qLGpv9Bw61b3dBze4d99KETp063XLzjantEgBGytSwGi7TykvVQIkqhrAmJzFjhYDhGN7G2Vys08N6Mll7BuJtkbQyFEpjhQpcXO6+u/vSpUtq00LPno9l5+Qag8H27ds//tgjKekY1lWsiHqoTAuWa6FyTZWwKmNdrWRKAhFkWMRykGEZVkA2F+dyszY3srmotFGaDlTgErFr994TJ04cP37i5MmTJ04cnzH9vdq0tmnz1j9deXlqekYI1jWsiFgO6nJYl0SsyEBXCCEAYAAQYFjE8ogXEMcjwY44O8vbIcvTtTZKk4IKXPVQVe3I0WPHjx8/cSIvLy8vL+/EO29Xkec0woczP3q058Mp7hAhBGsYa0RTga4RYqSgZxFiIMsBhoMIQcjQVTZK04QKXAoIhUL79h88dOjwgQMHDh488P6MaTGrpXIER6FQkoAKXFr46uvvbr7pBnPJ6DEvjRo5rL76Q6E0TajApYsDBw+1a1tpH7YGAUUoFEptoEln0kXbC84/euy4ueTDD2fVV2colKYJHcElxdFjxzdv3lJYWMQwTPv27Tr96Qqn05nMjZa5Kv22KZS6hApc1YwYOfqlcWOiy7/86tub/lXhfNq333NvT33rpptuvr7LjQP69zMcIRRVFXg+UkdV1cQOEhQKJYVQgauCh//bc+6c2Qkq/LDmp2uvufq++x4w5wns/XTfd9+ZAgCQZNluq8gWWurzZXq96eorhUKpDBW4REyb/kHvp55IptpTTz5uKdz4++Y/d7pyydIV3e++K1JIv20KpS6h06VEfP/9t+bTfs8OQAi+Ofl1S7VodQMArFq1WpZls7oNHzEqHZ2kUCjxoCO4RJgzUW3dtv3yyy41jvfs3bdq1ZfPD3g2+pZ+zw6Y8tYbMVvbvGXblVdclo5+UiiUmFAzkUR06vTnyPGUKRU5ADt2aD+gf7+CU4WDh1htd59/vn/Mpia/OZWqG4VSxzCjR4+u7z40XHbu2vvrr78Yx1u2bN6374COQYuWzR12OwDA5XTe0OX6tu06Ll+2NHKL3e665JJLf/99o7mdUaPHDX5xYF32nEKhADpFTcx33/94Q5drY14aO258mzZtHnrwPgDATz+vW7x4ccTr/o47/vPZZysiNUeMHNP7qV4tW7ZIe3cpFEplqMBVweQ3pw7o36/27QQCQZcrKdtgCoWSKqjAJQWsdbihDb9u/Otf/lx1PQqFkjroJkNSEEIWx0mBmiQdO7RPVWcoFEqS0BFc9cg7mb916/bt27cPHfJCkrf0HzDwqquu7nrXHWntGIVCiYYKXAqQJCkUDouiJIoiQui996a/Pmli5Go4HLbb7fXYPQqlyUIFLvWIomhObk+/YQqlvqBrcLXli1VfTX37vekzPjx46LBRYrfbZ82eG6nQ/Z4e9dQ1CqWpQ0dwteLWW29bteqLyGn/AQPfeP014/g//+n66afLjeOTJ/OpHRyFUvfQEVwNOXzk2FlnnWVWNwDA5DcmLVm6wji+oG27SHlkcEehUOoSKnA15OOP5+fl5UWX2/4X/Y3nuUihz1dWN72iUChmqMDVkBHDh0SOn+rd56nefQAAQ4eNvO3Wm43C8nJ/pIIg8IBCodQ5dA2uJhBCEKr427Bl6/YrLr/UUsfs/EC/ZAqlXqAjuJpg8dxav/4XS4W3prxTh92hUCixoRF9a8gzfZ99e+pbxnGfp5/ctOn3q666OhwO5+bmfvfdtzOmvxepOWbsy/XURwqlqUOnqDXkp5/XXfPPq5Kpeejw0fPanJPu/lAolGjoFLWG/PPqzh/N+bjKat98+wNVNwqlvqACV3Mefuj+H9b8dP8DD8Wr8ONPa+PFy6RQKHUAnaKmgEOHj6xfv2HVFysXLDg9prv99jvNQX0pFEq9QAUuZRQVlzTLzYmcFpeUZGdl1WN/KBQKnaKmjNycbPPp8eMx/BwoFEpdQs1EUkBBwak9e/dbjOPsdlt99YdCoRjQKWqtOHT4yOzZc8aNjZGyXlVVlqV/PyiU+oS+gTVHFMULzj8v5qUrr/wTVTcKpd6ha3A15513p8e7tGXL5gRXKRRK3UCnqDVk/4GD7du1TVzn901bOv3pijrpDoVCiQEdwdWQ779fEzm+774Hej/dN7rO119/U3cdolAoUdARXA0ZNnzU+JfHVlmNfr0USj1CR3A1JBQKxiyPOZSjUCj1QhPd6dvxx645c+YWFxfed9/9/7qxSw1aaNmyVXThwEGDmzdvHjl99LEnat5FCoVSa5qowF126cXGwexZM2s2i+zUqZP59PLLL7/yT508Hs+ggf0jhZ07JxVPiUKhpImmuAZnCTi+4deNf/3Ln2vQzn33PbBw4fwEFcrKyjMyPDVomUKhpISmuAZXZcBxgxN5JxO3E4kdEhNCCFU3CqV+aYoCBwB4970ZkeMB/fuZL/2w5qeXXn4FQnj2Wa27du2WuJ3vvl9z1VVXR5cv/mRZSvpJoVBqQ6OdogYCwU2bt27btk1V1euuu9ZicLtt+44rLr8scnoi72TrVi1feHHoa69OsLTzw5qfr70m0VKarCiffLJs586dxcVFWVnZV1xxxX33dk/Zx6BQKLWgEQrcF6u+Wrny82nvVcprtWDhJ/f2uNtcYpmoxqPxfT8UStOh8eyi5p3MX7His2f6PBXz6n33dr+3R4VUTXz19WTa/ODD2SnpG4VCqRcaicANHjJ84ivJZucb99KEkSOGJqgwdtz4a6755z+v7pyKrlEolHqjMQhckpPNcDjscDgAAMXFxTErjBn78nXXXXv1Vf9IYd8oFEo90jh3UUePeen3TVv27T9oLjTUDQDQuXOModnwEaNGjhhK1Y1CaUw0hk2Ge++9f9GiBcbxjPdndu/e1ZuRAQBY/MmyHvectvN4pOejs2Z+GLll0+atpaWlhw8febLXY5HCRvBVUCgUM41hirpw4fyu3e7OysqyJCFds+aHyHH79h3NlwyrkSNHj1Wq/+PaxBYhFArlzKIxjOAMThUW7djxR1lZucPhOOecs3Oys1q2bBG5Gs+czbx+N3DQ4Gg7uJis/+XXf/z9r7XvM4VCSS/kzEfX9ZGjqgjNFql5qrDIfO/ceQvM1X7buCnxs1597Q2j5ouDh6Xr81AolBTRGARuwPMvJFa3u+7qOmr0uMce72WcDh8xOnKvKIrmmg89/EiCB82cNcdcef+Bg+n/cBQKpeac8VPUw0eOnn9em+retXPX7osuPL0qN33Gh089+Xjk0ouDh70y4SVL/e07di5atNgSwvdM/+oolEbPGb/JsGXLNvPpCy8OVVV18huvJb5L0/TI8X8ffsAscBNfeVmSxEcfffSySy/2+wNfff3tt99+M2P6e5YWqDs9hdLwOeNHcN//8GOX66+t1i3RH/nnteur5bdwpn9pFEoT4Yw39L3+umsSXP3gw9k7d+3+8qtvCSFff/Pdnr37YmrT1Vf94/0PZiXzuNtvv/Orr7+tYV8pFErdcsaP4AAABw4eatf2gujyufMWPPjAvcm3Y1mMs3DXXV27duterQYpFEr90hgEDgCgqtrUt99dv+7npUuX3N39nr/+9e/dunU9r8051W1n67YdixYtnjtnVl5eXqRw3EsTrrvu2s7/+Fsqe0yhUNJPIxG4dLBn7752bS9gGKa+O0KhUGoIFTgKhdJoOeM3GSgUCiUeVOAoFEqjhQochUJptFCBo1AojRYqcBQKpdFCBY5CoTRaqMBRKJRGCxU4CoXSaKECR6FQGi1U4CgUSqOFChyFQmm0UIGjUCiNFipwFAql0UIFjkKhNFqowFEolEYLFTgKhdJo+X8Da0bBMECndAAAAABJRU5ErkJggg=='
        />
      </defs>
    </svg>
  );
};

export default ImagePortfolioUX4;