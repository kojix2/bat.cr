crystal_doc_search_index_callback({"repository_name":"wombat","body":"# wombat\n\nWombat is a Crystal binding for [bat](https://github.com/sharkdp/bat) syntax highlighting library.\n\n- [bat](https://github.com/sharkdp/bat) - A cat(1) clone with wings.\n- [bat-c](https://github.com/kojix2/bat-c) - A C wrapper for bat.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     bat:\n       github: kojix2/wombat\n   ```\n\n2. Run `shards install`\n3. Postinstall script will download the static library to `src/ext' directory.\n\n## Usage\n\n- [API Documentation](https://kojix2.github.io/wombat/)\n\n### Example\n\nIf you want to run the example, you need to download the static library first.\n\n```\ngit clone https://github.com/kojix2/wombat\nshards install\ncrystal run scripts/download_bat_c_static_library.cr\n```\n\n```crystal\nrequire \"wombat\"\n\nputs Wombat.pretty_string(%{puts \"hello world\"})\n```\n\n## Development\n\n- Sustainable development is important.\n\n## Contributing\n\n- Your contributions are always welcome!","program":{"html_id":"wombat/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"wombat","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"wombat/Wombat","path":"Wombat.html","kind":"module","full_name":"Wombat","name":"Wombat","abstract":false,"locations":[{"filename":"src/wombat.cr","line_number":4,"url":"https://github.com/kojix2/wombat/blob/660587ec7209ad0ceee1e0d8281057a37d6557b8/src/wombat.cr#L4"},{"filename":"src/wombat/lib_bat.cr","line_number":1,"url":"https://github.com/kojix2/wombat/blob/660587ec7209ad0ceee1e0d8281057a37d6557b8/src/wombat/lib_bat.cr#L1"},{"filename":"src/wombat/version.cr","line_number":1,"url":"https://github.com/kojix2/wombat/blob/660587ec7209ad0ceee1e0d8281057a37d6557b8/src/wombat/version.cr#L1"}],"repository_name":"wombat","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"{{ (`shards version /home/runner/work/wombat/wombat/src/wombat`).chomp.stringify }}"}],"class_methods":[{"html_id":"bat_c_version:String-class-method","name":"bat_c_version","doc":"Returns the version of the bat_c","summary":"<p>Returns the version of the bat_c</p>","abstract":false,"location":{"filename":"src/wombat.cr","line_number":8,"url":"https://github.com/kojix2/wombat/blob/660587ec7209ad0ceee1e0d8281057a37d6557b8/src/wombat.cr#L8"},"def":{"name":"bat_c_version","return_type":"String","visibility":"Public","body":"String.new(Wombat::Bat.bat_c_version)"}},{"html_id":"pretty_print(input:String,language:String|Nil=nil,theme:String|Nil=nil,tab_width:Int=4,colored_output:Bool=true,true_color:Bool=true,header:Bool=false,line_numbers:Bool=true,grid:Bool=true,rule:Bool=true,show_nonprintable:Bool=false,snip:Bool=true,wrapping_mode:Int=1,use_italics:Bool=true,paging_mode:Int=1,highlight_line:Int=-1):Nil-class-method","name":"pretty_print","doc":"Pretty print the input string","summary":"<p>Pretty print the input string</p>","abstract":false,"args":[{"name":"input","external_name":"input","restriction":"String"},{"name":"language","default_value":"nil","external_name":"language","restriction":"String | ::Nil"},{"name":"theme","default_value":"nil","external_name":"theme","restriction":"String | ::Nil"},{"name":"tab_width","default_value":"4","external_name":"tab_width","restriction":"Int"},{"name":"colored_output","default_value":"true","external_name":"colored_output","restriction":"Bool"},{"name":"true_color","default_value":"true","external_name":"true_color","restriction":"Bool"},{"name":"header","default_value":"false","external_name":"header","restriction":"Bool"},{"name":"line_numbers","default_value":"true","external_name":"line_numbers","restriction":"Bool"},{"name":"grid","default_value":"true","external_name":"grid","restriction":"Bool"},{"name":"rule","default_value":"true","external_name":"rule","restriction":"Bool"},{"name":"show_nonprintable","default_value":"false","external_name":"show_nonprintable","restriction":"Bool"},{"name":"snip","default_value":"true","external_name":"snip","restriction":"Bool"},{"name":"wrapping_mode","default_value":"1","external_name":"wrapping_mode","restriction":"Int"},{"name":"use_italics","default_value":"true","external_name":"use_italics","restriction":"Bool"},{"name":"paging_mode","default_value":"1","external_name":"paging_mode","restriction":"Int"},{"name":"highlight_line","default_value":"-1","external_name":"highlight_line","restriction":"Int"}],"args_string":"(input : String, language : String | Nil = nil, theme : String | Nil = nil, tab_width : Int = 4, colored_output : Bool = true, true_color : Bool = true, header : Bool = false, line_numbers : Bool = true, grid : Bool = true, rule : Bool = true, show_nonprintable : Bool = false, snip : Bool = true, wrapping_mode : Int = 1, use_italics : Bool = true, paging_mode : Int = 1, highlight_line : Int = -1) : Nil","args_html":"(input : String, language : String | Nil = <span class=\"n\">nil</span>, theme : String | Nil = <span class=\"n\">nil</span>, tab_width : Int = <span class=\"n\">4</span>, colored_output : Bool = <span class=\"n\">true</span>, true_color : Bool = <span class=\"n\">true</span>, header : Bool = <span class=\"n\">false</span>, line_numbers : Bool = <span class=\"n\">true</span>, grid : Bool = <span class=\"n\">true</span>, rule : Bool = <span class=\"n\">true</span>, show_nonprintable : Bool = <span class=\"n\">false</span>, snip : Bool = <span class=\"n\">true</span>, wrapping_mode : Int = <span class=\"n\">1</span>, use_italics : Bool = <span class=\"n\">true</span>, paging_mode : Int = <span class=\"n\">1</span>, highlight_line : Int = <span class=\"n\">-1</span>) : Nil","location":{"filename":"src/wombat.cr","line_number":13,"url":"https://github.com/kojix2/wombat/blob/660587ec7209ad0ceee1e0d8281057a37d6557b8/src/wombat.cr#L13"},"def":{"name":"pretty_print","args":[{"name":"input","external_name":"input","restriction":"String"},{"name":"language","default_value":"nil","external_name":"language","restriction":"String | ::Nil"},{"name":"theme","default_value":"nil","external_name":"theme","restriction":"String | ::Nil"},{"name":"tab_width","default_value":"4","external_name":"tab_width","restriction":"Int"},{"name":"colored_output","default_value":"true","external_name":"colored_output","restriction":"Bool"},{"name":"true_color","default_value":"true","external_name":"true_color","restriction":"Bool"},{"name":"header","default_value":"false","external_name":"header","restriction":"Bool"},{"name":"line_numbers","default_value":"true","external_name":"line_numbers","restriction":"Bool"},{"name":"grid","default_value":"true","external_name":"grid","restriction":"Bool"},{"name":"rule","default_value":"true","external_name":"rule","restriction":"Bool"},{"name":"show_nonprintable","default_value":"false","external_name":"show_nonprintable","restriction":"Bool"},{"name":"snip","default_value":"true","external_name":"snip","restriction":"Bool"},{"name":"wrapping_mode","default_value":"1","external_name":"wrapping_mode","restriction":"Int"},{"name":"use_italics","default_value":"true","external_name":"use_italics","restriction":"Bool"},{"name":"paging_mode","default_value":"1","external_name":"paging_mode","restriction":"Int"},{"name":"highlight_line","default_value":"-1","external_name":"highlight_line","restriction":"Int"}],"return_type":"Nil","visibility":"Public","body":"result = Wombat::Bat.bat_pretty_print(input, input.size, Wombat::Bat::BatInputType::BatBytes, language, theme, Wombat::Bat::BatPrintOptions.new(tab_width: tab_width, colored_output: colored_output, true_color: true_color, header: header, line_numbers: line_numbers, grid: grid, rule: rule, show_nonprintable: show_nonprintable, snip: snip, wrapping_mode: wrapping_mode, use_italics: use_italics, paging_mode: paging_mode, highlight_line: highlight_line))\nif result != 0\n  raise(Error.new(\"Failed to pretty print input\"))\nend\n"}},{"html_id":"pretty_print(path:Path|String,language:String|Nil=nil,theme:String|Nil=nil,tab_width:Int=4,colored_output:Bool=true,true_color:Bool=true,header:Bool=true,line_numbers:Bool=true,grid:Bool=true,rule:Bool=true,show_nonprintable:Bool=false,snip:Bool=true,wrapping_mode:Int=1,use_italics:Bool=true,paging_mode:Int=1,highlight_line:Int=-1):Nil-class-method","name":"pretty_print","doc":"Pretty print the input file","summary":"<p>Pretty print the input file</p>","abstract":false,"args":[{"name":"path","external_name":"path","restriction":"Path | String"},{"name":"language","default_value":"nil","external_name":"language","restriction":"String | ::Nil"},{"name":"theme","default_value":"nil","external_name":"theme","restriction":"String | ::Nil"},{"name":"tab_width","default_value":"4","external_name":"tab_width","restriction":"Int"},{"name":"colored_output","default_value":"true","external_name":"colored_output","restriction":"Bool"},{"name":"true_color","default_value":"true","external_name":"true_color","restriction":"Bool"},{"name":"header","default_value":"true","external_name":"header","restriction":"Bool"},{"name":"line_numbers","default_value":"true","external_name":"line_numbers","restriction":"Bool"},{"name":"grid","default_value":"true","external_name":"grid","restriction":"Bool"},{"name":"rule","default_value":"true","external_name":"rule","restriction":"Bool"},{"name":"show_nonprintable","default_value":"false","external_name":"show_nonprintable","restriction":"Bool"},{"name":"snip","default_value":"true","external_name":"snip","restriction":"Bool"},{"name":"wrapping_mode","default_value":"1","external_name":"wrapping_mode","restriction":"Int"},{"name":"use_italics","default_value":"true","external_name":"use_italics","restriction":"Bool"},{"name":"paging_mode","default_value":"1","external_name":"paging_mode","restriction":"Int"},{"name":"highlight_line","default_value":"-1","external_name":"highlight_line","restriction":"Int"}],"args_string":"(path : Path | String, language : String | Nil = nil, theme : String | Nil = nil, tab_width : Int = 4, colored_output : Bool = true, true_color : Bool = true, header : Bool = true, line_numbers : Bool = true, grid : Bool = true, rule : Bool = true, show_nonprintable : Bool = false, snip : Bool = true, wrapping_mode : Int = 1, use_italics : Bool = true, paging_mode : Int = 1, highlight_line : Int = -1) : Nil","args_html":"(path : Path | String, language : String | Nil = <span class=\"n\">nil</span>, theme : String | Nil = <span class=\"n\">nil</span>, tab_width : Int = <span class=\"n\">4</span>, colored_output : Bool = <span class=\"n\">true</span>, true_color : Bool = <span class=\"n\">true</span>, header : Bool = <span class=\"n\">true</span>, line_numbers : Bool = <span class=\"n\">true</span>, grid : Bool = <span class=\"n\">true</span>, rule : Bool = <span class=\"n\">true</span>, show_nonprintable : Bool = <span class=\"n\">false</span>, snip : Bool = <span class=\"n\">true</span>, wrapping_mode : Int = <span class=\"n\">1</span>, use_italics : Bool = <span class=\"n\">true</span>, paging_mode : Int = <span class=\"n\">1</span>, highlight_line : Int = <span class=\"n\">-1</span>) : Nil","location":{"filename":"src/wombat.cr","line_number":59,"url":"https://github.com/kojix2/wombat/blob/660587ec7209ad0ceee1e0d8281057a37d6557b8/src/wombat.cr#L59"},"def":{"name":"pretty_print","args":[{"name":"path","external_name":"path","restriction":"Path | String"},{"name":"language","default_value":"nil","external_name":"language","restriction":"String | ::Nil"},{"name":"theme","default_value":"nil","external_name":"theme","restriction":"String | ::Nil"},{"name":"tab_width","default_value":"4","external_name":"tab_width","restriction":"Int"},{"name":"colored_output","default_value":"true","external_name":"colored_output","restriction":"Bool"},{"name":"true_color","default_value":"true","external_name":"true_color","restriction":"Bool"},{"name":"header","default_value":"true","external_name":"header","restriction":"Bool"},{"name":"line_numbers","default_value":"true","external_name":"line_numbers","restriction":"Bool"},{"name":"grid","default_value":"true","external_name":"grid","restriction":"Bool"},{"name":"rule","default_value":"true","external_name":"rule","restriction":"Bool"},{"name":"show_nonprintable","default_value":"false","external_name":"show_nonprintable","restriction":"Bool"},{"name":"snip","default_value":"true","external_name":"snip","restriction":"Bool"},{"name":"wrapping_mode","default_value":"1","external_name":"wrapping_mode","restriction":"Int"},{"name":"use_italics","default_value":"true","external_name":"use_italics","restriction":"Bool"},{"name":"paging_mode","default_value":"1","external_name":"paging_mode","restriction":"Int"},{"name":"highlight_line","default_value":"-1","external_name":"highlight_line","restriction":"Int"}],"return_type":"Nil","visibility":"Public","body":"result = Wombat::Bat.bat_pretty_print(path.to_s, path.to_s.size, Wombat::Bat::BatInputType::BatFile, language, theme, Wombat::Bat::BatPrintOptions.new(tab_width: tab_width, colored_output: colored_output, true_color: true_color, header: header, line_numbers: line_numbers, grid: grid, rule: rule, show_nonprintable: show_nonprintable, snip: snip, wrapping_mode: wrapping_mode, use_italics: use_italics, paging_mode: paging_mode, highlight_line: highlight_line))\nif result != 0\n  raise(Error.new(\"Failed to pretty print file : #{path}\"))\nend\n"}},{"html_id":"pretty_string(input:String,language:String|Nil=nil,theme:String|Nil=nil,tab_width:Int=4,colored_output:Bool=true,true_color:Bool=true,header:Bool=false,line_numbers:Bool=true,grid:Bool=true,rule:Bool=true,show_nonprintable:Bool=false,snip:Bool=true,wrapping_mode:Int=1,use_italics:Bool=true,paging_mode:Int=2,highlight_line:Int=-1):String-class-method","name":"pretty_string","doc":"Get the highlighted string of the input","summary":"<p>Get the highlighted string of the input</p>","abstract":false,"args":[{"name":"input","external_name":"input","restriction":"String"},{"name":"language","default_value":"nil","external_name":"language","restriction":"String | ::Nil"},{"name":"theme","default_value":"nil","external_name":"theme","restriction":"String | ::Nil"},{"name":"tab_width","default_value":"4","external_name":"tab_width","restriction":"Int"},{"name":"colored_output","default_value":"true","external_name":"colored_output","restriction":"Bool"},{"name":"true_color","default_value":"true","external_name":"true_color","restriction":"Bool"},{"name":"header","default_value":"false","external_name":"header","restriction":"Bool"},{"name":"line_numbers","default_value":"true","external_name":"line_numbers","restriction":"Bool"},{"name":"grid","default_value":"true","external_name":"grid","restriction":"Bool"},{"name":"rule","default_value":"true","external_name":"rule","restriction":"Bool"},{"name":"show_nonprintable","default_value":"false","external_name":"show_nonprintable","restriction":"Bool"},{"name":"snip","default_value":"true","external_name":"snip","restriction":"Bool"},{"name":"wrapping_mode","default_value":"1","external_name":"wrapping_mode","restriction":"Int"},{"name":"use_italics","default_value":"true","external_name":"use_italics","restriction":"Bool"},{"name":"paging_mode","default_value":"2","external_name":"paging_mode","restriction":"Int"},{"name":"highlight_line","default_value":"-1","external_name":"highlight_line","restriction":"Int"}],"args_string":"(input : String, language : String | Nil = nil, theme : String | Nil = nil, tab_width : Int = 4, colored_output : Bool = true, true_color : Bool = true, header : Bool = false, line_numbers : Bool = true, grid : Bool = true, rule : Bool = true, show_nonprintable : Bool = false, snip : Bool = true, wrapping_mode : Int = 1, use_italics : Bool = true, paging_mode : Int = 2, highlight_line : Int = -1) : String","args_html":"(input : String, language : String | Nil = <span class=\"n\">nil</span>, theme : String | Nil = <span class=\"n\">nil</span>, tab_width : Int = <span class=\"n\">4</span>, colored_output : Bool = <span class=\"n\">true</span>, true_color : Bool = <span class=\"n\">true</span>, header : Bool = <span class=\"n\">false</span>, line_numbers : Bool = <span class=\"n\">true</span>, grid : Bool = <span class=\"n\">true</span>, rule : Bool = <span class=\"n\">true</span>, show_nonprintable : Bool = <span class=\"n\">false</span>, snip : Bool = <span class=\"n\">true</span>, wrapping_mode : Int = <span class=\"n\">1</span>, use_italics : Bool = <span class=\"n\">true</span>, paging_mode : Int = <span class=\"n\">2</span>, highlight_line : Int = <span class=\"n\">-1</span>) : String","location":{"filename":"src/wombat.cr","line_number":105,"url":"https://github.com/kojix2/wombat/blob/660587ec7209ad0ceee1e0d8281057a37d6557b8/src/wombat.cr#L105"},"def":{"name":"pretty_string","args":[{"name":"input","external_name":"input","restriction":"String"},{"name":"language","default_value":"nil","external_name":"language","restriction":"String | ::Nil"},{"name":"theme","default_value":"nil","external_name":"theme","restriction":"String | ::Nil"},{"name":"tab_width","default_value":"4","external_name":"tab_width","restriction":"Int"},{"name":"colored_output","default_value":"true","external_name":"colored_output","restriction":"Bool"},{"name":"true_color","default_value":"true","external_name":"true_color","restriction":"Bool"},{"name":"header","default_value":"false","external_name":"header","restriction":"Bool"},{"name":"line_numbers","default_value":"true","external_name":"line_numbers","restriction":"Bool"},{"name":"grid","default_value":"true","external_name":"grid","restriction":"Bool"},{"name":"rule","default_value":"true","external_name":"rule","restriction":"Bool"},{"name":"show_nonprintable","default_value":"false","external_name":"show_nonprintable","restriction":"Bool"},{"name":"snip","default_value":"true","external_name":"snip","restriction":"Bool"},{"name":"wrapping_mode","default_value":"1","external_name":"wrapping_mode","restriction":"Int"},{"name":"use_italics","default_value":"true","external_name":"use_italics","restriction":"Bool"},{"name":"paging_mode","default_value":"2","external_name":"paging_mode","restriction":"Int"},{"name":"highlight_line","default_value":"-1","external_name":"highlight_line","restriction":"Int"}],"return_type":"String","visibility":"Public","body":"len_ptr = Pointer(LibC::SizeT).malloc\noutput_ptr = Pointer(Pointer(UInt8)).malloc\nresult = Wombat::Bat.bat_pretty_print_to_string(input, input.size, Wombat::Bat::BatInputType::BatBytes, language, theme, Wombat::Bat::BatPrintOptions.new(tab_width: tab_width, colored_output: colored_output, true_color: true_color, header: header, line_numbers: line_numbers, grid: grid, rule: rule, show_nonprintable: show_nonprintable, snip: snip, wrapping_mode: wrapping_mode, use_italics: use_italics, paging_mode: paging_mode, highlight_line: highlight_line), output_ptr, len_ptr)\nif result != 0\n  raise(Error.new(\"Failed to highlight input\"))\nend\nstr = String.new(output_ptr.value, len_ptr.value)\nWombat::Bat.bat_free_string(output_ptr.value)\nstr\n"}}],"types":[{"html_id":"wombat/Wombat/Error","path":"Wombat/Error.html","kind":"class","full_name":"Wombat::Error","name":"Error","abstract":false,"superclass":{"html_id":"wombat/Exception","kind":"class","full_name":"Exception","name":"Exception"},"ancestors":[{"html_id":"wombat/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"wombat/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"wombat/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/wombat.cr","line_number":5,"url":"https://github.com/kojix2/wombat/blob/660587ec7209ad0ceee1e0d8281057a37d6557b8/src/wombat.cr#L5"}],"repository_name":"wombat","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"wombat/Wombat","kind":"module","full_name":"Wombat","name":"Wombat"}}]}]}})