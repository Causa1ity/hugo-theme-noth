## Simple Use

下载主题到themes目录：
```shell
$ cd themes
$ git clone https://github.com/causa1ity/hugo-theme-noth noth
```

使用主题中exampleSite的配置文件覆盖默认的配置文件（或者自行修改）：
```shell
$ cd .. # go to hugo site root
$ cp -r themes/noth/exampleSite/config .
$ rm config.toml
```

现在就可以使用 `hugo server` 试用了，如果没有内容，可以将 exampleSite 中的 content 复制到当前：
```shell
$ cp -r themes/noth/exampleSite/content .
```

### new pages

这里一共设计了四种内容模板：

* metapages

在网站使用主题后需要运行一次，其用来生成归档、链接和留言页面，也可以直接将 exampleSite 中的直接复制过了，其名称必须为 metapages：
```shell
$ hugo new -k metapages metapages
```
这将会生成一个 metapages 目录，其中包含三个文件：archive.md、link.md 和 message.md，分别对应归档、链接和留言。
archive 一般不需要修改；message 可以增加内容，将会显示在留言页；link 则可以增加 front matter 中的参数，设置显示在页面中的链接（目前可以设置友链和在线工具，分别对应links和tools）。

* section 和 subsection

列表页，用于组织文档。
```shell
$ hugo new -k section devops/
$ hugo new -k section devops/java
```

* post

也就是一般的文章页，在 front matter 中可以设置是否开启 gitalk 评论和 toc（目录）。
```shell
$ hugo new -k post devops/java/reflection.md
# 默认生成文章与post基本一致，但是默认不开启toc
$ hugo new life/diary/travel.md
```

### config

* site config

hugo 本身支持单文件或者一个目录作为配置文件，默认会寻找 config.toml 和 config 目录，个人习惯使用目录，所以将配置放在了 config 目录中。

config.toml:

其中包含一些基本配置：baseURL、languageCode 和 title 为基本配置，根据网站设置即可。
theme 为主题的名称，根据下载后的命名设置；如果使用 Hugo Module 来使用主题，则要使用注释掉的方式。
summaryLength 表示默认摘要的长度，如果是中文内容则还要同时设置 hasCJKLanguage 才能正确摘取。
paginate 表示分页数，也就是分页时每页显示的文章卡片的数量。
markup 为 markdown 渲染时的一些设置，tableOfContents 表示生成目录的起止标题等级以及是否分级。
build 是生成网站时的设置，useResourcesCache 表示是否使用缓存，一般设置为 always。

* params.toml

用于设置一些参数，avatar、motto、author、email、github、background 用于设置左侧卡片菜单的值，其中 avatar 和 background 为图片，设置时可以在 static 目录创建一个 images 目录，将图片放入其中，然后设置参数值为 /images/filename.jpg。
gitalk 用于设置启用 gitalk 评论时需要的值，具体可以参考: [https://causality.top/devops/web/hugo/0x06-gitalk/](https://causality.top/devops/web/hugo/0x06-gitalk/) 。

* taxonomies.toml

用于设置分类，默认设置了 categories 和 tags 两种分类发。