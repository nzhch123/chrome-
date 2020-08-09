CREATE TABLE IF NOT EXISTS account(
	id smallint(5) unsigned NOT NULL auto_increment,
	name  varchar(20) NOT NULL,	
	password varchar(50) NOT NULL,
	starttime varchar(50) NOT NULL,
	endtime	varchar(50) NOT NULL,
	ad	smallint(1) unsigned NOT NULL,
	PRIMARY KEY  (id)

)ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;