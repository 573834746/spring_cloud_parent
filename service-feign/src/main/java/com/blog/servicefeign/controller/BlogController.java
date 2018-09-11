package com.blog.servicefeign.controller;

import com.alibaba.fastjson.JSONObject;
import com.blog.servicefeign.pojo.AskExtends;
import com.blog.servicefeign.pojo.BlogsExtends;
import com.blog.servicefeign.service.BlogInterfaceController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * 控制层类RequestMapping填写自己的路径地址   如：第一个@RequestMapping("/xuran")
 * 该Controller类内的方法 填写正常路径即可
 * 切记 html页面ajax调用的时候url填写正常的路径地址，无需带上自己的路径
 */
@RequestMapping("/xuran")
@Controller
public class BlogController {


    @Resource
    BlogInterfaceController blogInterfaceController;

    @RequestMapping(value = "/list")
    public @ResponseBody List<BlogsExtends> selectObjects(String alias){
        return blogInterfaceController.selectObjects(alias);
    }

    @RequestMapping(value = "/ask_list")
    public @ResponseBody List<AskExtends> selectAskObjects(@RequestParam(defaultValue = "date",value = "rules") String rules){
        return blogInterfaceController.selectAskObjects(rules);
    }

    @RequestMapping(value = "/index")
    public String homePage(){
        return "home";
    }
    @RequestMapping(value = "/ask")
    public String askPage(){
        return "ask";
    }

    @RequestMapping(value = "/guanggao")
    public String guanggaoPage(){
        return "guanggao";
    }

    @RequestMapping("/ask_money_list")
    @ResponseBody
    public List<AskExtends> selectAskMoneyObjects(){
        List<AskExtends> askMoneyObjects = blogInterfaceController.selectAskMoneyObjects();
        return askMoneyObjects;
    }

    @RequestMapping("/insertAsk")
    @ResponseBody
    public Boolean insertAsk(AskExtends askExtends){
        //对象转json
        String json = JSONObject.toJSONString(askExtends);
        return blogInterfaceController.insertAsk(json);
    }
}
