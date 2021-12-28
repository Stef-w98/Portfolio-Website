

function change_css(){

    document.getElementById('studies').innerHTML = '<table class="tbstudies">\n' +
        '  <tr>\n' +
        '    <th colspan="4">Education</th>\n' +
        '  </tr>\n' +
        '    <tr>\n' +
        '        <th></th>\n' +
        '        <th>Hotel and catering school</th>\n' +
        '        <th>HBO5 nursing education</th>\n' +
        '        <th>Associate degree programming</th>\n' +
        '    </tr>\n' +
        '  <tr>\n' +
        '    <th>Place</th>\n' +
        '    <td>Herk-de-Stad</td>\n' +
        '    <td colspan="2">Hasselt</td>\n' +
        '\n' +
        '  </tr>\n' +
        '  <tr>\n' +
        '    <th>Year</th>\n' +
        '    <td>2013 - 2017</td>\n' +
        '    <td>2017 - 2020</td>\n' +
        '    <td>2021 - 2032</td>\n' +
        '  </tr>\n' +
        '</table></div>';
    //document.getElementById('studies').classList.add('tbstudies','table', 'th, td', 'tr:nth-child(even)');


}

function stage_tabel(){
    document.getElementById('stages').innerHTML = '<table class="tbstages">\n' +
        '    <tr>\n' +
        '        <th colspan="2">Internships</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <th colspan="2">Hotel and catering</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <th>Place</th>\n' +
        '        <th>Year</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Hof Te Rhode in schaffen</td>\n' +
        '        <td>2015</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Innesto in Houthalen-Helchteren</td>\n' +
        '        <td>2016</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Sel Gris in Knokke-Heist</td>\n' +
        '        <td>2017</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <th colspan="2">Nursing</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <th>Place</th>\n' +
        '        <th>Year</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Retirement home WZC Ocura in Beringen</td>\n' +
        '        <td>2017</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>SFZ Heusden - Geriatrics</td>\n' +
        '        <td>2017/2018</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Jessa Ziekenhuis St.-Ursula - Medic rehabilitation</td>\n' +
        '        <td>2018</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>SFZ Heusden - Internal 2 (heart/lung)</td>\n' +
        '        <td>2019</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Jessa Ziekenhuis Salvator - Gerontopsychiatry</td>\n' +
        '        <td>2019</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Retirement home WZC Ocura - Herk-De-Stad</td>\n' +
        '        <td>2020</td>\n' +
        '    </tr>\n' +
        '\n' +
        '\n' +
        '</table>';

    //document.getElementById('stages').classList.add('tbstages','table', 'th, td', 'tr:nth-child(even)');
}

function werk_tabel(){
    document.getElementById('werk').innerHTML = '<table class="tbstages">\n' +
        '    <tr>\n' +
        '        <th colspan="2">Work experience</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <th colspan="2">Student Jobs</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <th>Place</th>\n' +
        '        <th>Year</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Hof Te Rhode in schaffen</td>\n' +
        '        <td>2015 tot 2016</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Kaasbrik in Halen</td>\n' +
        '        <td>2017</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Rust-Oleum Mathys in Zelem</td>\n' +
        '        <td>2018</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Scheuten Glas in Diest</td>\n' +
        '        <td>2019</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <th colspan="2">Fulltime Jobs</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <th>Place</th>\n' +
        '        <th>Year</th>\n' +
        '    </tr>\n' +
        '\n' +
        '    <tr>\n' +
        '        <td>Retirement home WZC Ocura - Herk-De-Stad</td>\n' +
        '        <td>July 2020 to August 2021</td>\n' +
        '    </tr>\n' +
        '\n' +
        '</table>';

    //document.getElementById('werk').classList.add('tbstages','table', 'th, td', 'tr:nth-child(even)');
}

function test1(){
    werk_tabel();
    change_css();
    stage_tabel();


}