do 
dim alex
alex=InputBox("输入你想说的话，或输入“再见”关闭程序:","Alex")
if alex = "导航" then
dim lead
Set lead=WScript.CreateObject("WScript.Shell") 
On error Resume Next 
  lead.Run "www.sherry.cf/desk" 
CreateObject("SAPI.SpVoice").Speak ("已为您打开随身导航")
else
 if alex = "音乐" then
 dim music
 Set music=WScript.CreateObject("WScript.Shell")
 music.Run """C:\Program Files (x86)\Netease\CloudMusic\cloudmusic.exe"""
 CreateObject("SAPI.SpVoice").Speak ("已为您打开音乐播放器")
 else
  if alex = "时间" then
  MsgBox("现在的时间是"&date()&"，"&time()&"，"&WeekdayName(weekday(date)))
  else
  if alex = "掷骰子" then
  MsgBox(Int(7 * rnd()))
  else
  if alex = "背单词" then
  randomize
  r=rnd()
  if r>0.5 then
  MsgBox("wool羊毛 pine松树 seed种子 squirrel松鼠 sparrow麻雀 bleed流血 broken断的、破的 relief减轻、宽慰 shelter躲避 scholar学者 bench长凳housewife家庭主妇 postcode邮政编码 astronomy天文学 allergic过敏的 anxiety忧虑、担心 revision复习 oral口头的、口述的 straw稻草、麦秆 glare怒视、瞪 section部分 literary文学的 glance瞥一眼 steam蒸汽 confirm证实 librarian图书馆管理员 file档案文件 sigh叹息叹气grateful感激的、感谢的guilty不安的有罪的can'thelpdoingsth禁不住要做某事alike相像的shortcoming缺点、短处account(银行)账户button钮扣parrot鹦鹉cage笼子judge评判part-time部分时间地claw(动物或鸟的)爪子yoghurt酸乳酪酸奶honey蜂蜜chew咀嚼satellite卫星、人造卫星wrinkle皱纹forehead额、前额block大厦、街区lap大腿部、膝上devote专心致志于、献身于salty含盐的、咸的carrot胡萝pea豌豆companion同伴、伴侣devotion奉献forever永远carpenter木匠chemist化学家receptionist接待员shopassistant营业贝typist打字员insurance保险bonus额外津贴、奖金fee服务费、学费income收入reward奖赏wage薪金、工资charge收费、要价summary摘要、总结guidance指导paragraph段落timetable时间表、课程表institute机构；学院aid援助、帮助pump泵、抽水机deer鹿charge负责takechargeof接管、控制topic题目、话题receipt收据、收条error错误liquid液体comprehension理解consult请教、查chart表格、图表casual随意的、非正式的quarrel争吵、吵架makeup编造makeout听出、看出")
  else
   if r>0.25 then
   MsgBox("gointodetail训论、细谈 speakup大声地说、大胆说出 situp托儿所、保育室 collar衣领 appointment约见、约会 childhood童年、儿童时代typewriter打字机instant片刻、瞬息battle战斗、战役civil民间的、国内的moral道德basis基础、根据corn玉米cattle牛frost霜surrounding附近的、周围的steep陡峭的、险峻的grain谷物、谷粒lip嘴唇mud烂泥、泥浆wisdom智慧idiom习语、成晤junior低级的juniorhigh初中universe宇宙believein信任、信仰mankind人类nest鸟窝、巢feather羽毛turnover反转overcome战胜、克服grasp理解、领会、抓牢inspect仔细检查illegal违法的payoff取得成功commit投入existence存在glory光荣、荣誉constantly不断地beneath在底下bend弯腰、倾身stage舞台；阶段、时期hesitate犹豫、踌躇wrist腕、腕关节twist旋转、转动judgment判断、判断keepupwith跟、赶上decrease减少、降低multiply乘；大量增加division部门、分割branch分支、部门operate运转、运作、操作dynamic精力充沛的respond回复、回答flexible灵活的、柔韧的envy羡慕、妒忌bother打扰、烦扰continent大陆、洲incase万一comfort舒适、安逸slave奴隶booming迅速发展的panic恐慌、惊惶arithmetic算术enclose随信附上curriculum简历、个人履历dueto由于inaddition此外qualification资格、资历arrow箭oxygen氧、氧气tick打勾做记号ox牛、公牛spelling拼写backwards由后向前地correction改正、改进simplify简化jar罐子、坛子secure稳定的；无忧无虑的frankly坦率地、真诚地franklyspeaking老实说、说实活layoff裁贝、解雇blank空白的swell膨胀、肿胀suspect怀疑lump团、块throat咽喉、喉咙slams现状；社会地位")
   else
   MsgBox("chief最高级别的saying格言、谚语postage邮费airmail航空邮政user使用者instruct指导、教导asidefrom除……之外bury埋葬alphabet字母表distinguish辨别；表现突出drill练习、训练motto格言、座右铭conservative保守的、旧式的assignment作业；任务、工作alternative可选择的；另类的punishment惩罚、处罚reputation名誉、名声slight少量的、微小的loose(言行等)不严谨的、放荡的looseconduct品行不端obey服从、听从mild温和的receiver接收者pace速度、步速outstanding杰出的、优秀的reflect反映、反射select挑选toacertainextent在某种程度上misunderstand误解angle角triangle三角形atom原子pour吐倒、灌powder火药flame火焰、火舌setoff引发、出发lack缺乏、没有spit吐口水、吐痰drag拖、拉acid酸onion洋葱ours我们的access接近或进入之路worthwhile值得努力的spy间谍、特务glue胶、胶水fellow同伴fellowstudents同学acquire获得、得到beaccustomedto习惯于thinking思考、考虑rank职衔*bureaucratic官僚的worthy值得的religion宗教defence保卫、保护tendto经常做、倾向于ignore忽视、不顾unwilling不情愿的assumption假定、假设approveof赞成、赞外urge力劝、强烈要求inspire鼓舞、鼓励shadow阴影、影子conventional传统的、保守的kingdom王国civilization文明vital极其重要的beneficial有用的、有益的image景象、形象assume假定、假没adapt使适应asawhole总的来说facility设备、设施appreciation欣赏biochemistry生物化学choir合唱队、合唱团")
  end if
 end if
     end if
    end if
   end if
  end if
 end if
loop until alex = "再见"
