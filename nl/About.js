function change_css(){
    stage_tabel();
    document.getElementById('studies').innerHTML = '<table class="tbstudies">\n' +
        '  <tr>\n' +
        '    <th colspan="4">Studies</th>\n' +
        '  </tr>\n' +
        '    <tr>\n' +
        '        <th></th>\n' +
        '        <th>Restaurant/Keuken</th>\n' +
        '        <th>HBO5 Verpleegkunde</th>\n' +
        '        <th>Graduaat Programmeren</th>\n' +
        '    </tr>\n' +
        '  <tr>\n' +
        '    <th>Plaats</th>\n' +
        '    <td>Herk-de-Stad</td>\n' +
        '    <td colspan="2">Hasselt</td>\n' +
        '\n' +
        '  </tr>\n' +
        '  <tr>\n' +
        '    <th>Jaar</th>\n' +
        '    <td>2013 - 2017</td>\n' +
        '    <td>2017 - 2020</td>\n' +
        '    <td>2021 - 2032</td>\n' +
        '  </tr>\n' +
        '</table></div>';
    document.getElementById('studies').classList.add('tbstudies','table', 'th, td', 'tr:nth-child(even)',)


}

function stage_tabel(){
    document.getElementById('stages').innerHTML = '<table class="tbstages">\n' +
        '    <tr>\n' +
        '        <th colspan="2">Stages</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <th colspan="2">Restaurant/Keuken</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <th>Plaats</th>\n' +
        '        <th>Jaar</th>\n' +
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
        '        <th colspan="2">Verpleegkunde</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <th>Plaats</th>\n' +
        '        <th>Jaar</th>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>WZC Ocura in Beringen</td>\n' +
        '        <td>2017</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>SFZ Heusden - Geriatrie</td>\n' +
        '        <td>2017/2018</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Jessa Ziekenhuis St.-Ursula - Revalidatie</td>\n' +
        '        <td>2018</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>SFZ Heusden - Inwendige 2 (Hart/Long)</td>\n' +
        '        <td>2019</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>Jessa Ziekenhuis Salvator - Gerontopsychiatrie</td>\n' +
        '        <td>2019</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '        <td>WZC Ocura - Herk-De-Stad</td>\n' +
        '        <td>2020</td>\n' +
        '    </tr>\n' +
        '\n' +
        '\n' +
        '</table>'

    document.getElementById('stages').classList.add('tbstages','table', 'th, td', 'tr:nth-child(even)',)
}
