/************************************************************************************************
 *...............................................................................
 *..........%%%%,....%%%%,...,%%%%%%%%/...%%%%#..../%%%%..../%%%%%%..............
 *.........,%%%%%/...%%%%,..%%%%%%%%%%%%,.(%%%%....%%%%#...,%%%%%%%%.............
 *.........,%%%%%%%..%%%%,.(%%%%*...%%%%%..%%%%*..,%%%%....%%%%.%%%%*............
 *.........,%%%%%%%%.%%%%,.%%%%%....%%%%%..*%%%%..%%%%(...*%%%%.,%%%%............
 *.........,%%%%.%%%%%%%%,.%%%%%....%%%%%...%%%%,.%%%%....%%%%...%%%%*...........
 *.........,%%%%..%%%%%%%,.(%%%%*...%%%%%...,%%%#(%%%*...#%%%%....%%%%...........
 *.........,%%%%...*%%%%%,..%%%%%%%%%%%%,....%%%%%%%%....%%%%,....%%%%(..........
 *.........,%%%%.....%%%%....,%%%%%%%%*......,%%%%%%,...#%%%%.....#%%%%..........
 *...............................................................................
 *
 *   Command here: Command for Nova
 *   Copyright (C) 2019 Designed and Programed by Swingin30 and Techlion
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * ***********************************************************************************************/
module.exports.run = async (client, msg, args, throwE, suggest, color, prefix, images) => {
	const Discord = require('discord.js');

	if(!msg.member.hasPermission('KICK_MEMBERS')){
		let fembed = new Discord.RichEmbed;
		fembed.setTitle('Error');
		fembed.setColor(0xff0000);
		fembed.setThumbnail(`${images.error}`);
		fembed.setDescription('You do not have sufficient permissions to run this command. Please talk to a server administrator. If you think this is a mistake, please contact a developer [here](https://discord.gg/RFXArBN)');
		fembed.setFooter('Use '+prefix+'help to see all of my commands');
		return msg.channel.send(fembed);
	}
	try{
		let num = parseInt(args.join(' '), 10);
		if(num > 100 || num < 1){
			return throwE('Enter a number between 1-99');
		}
		msg.delete(); //Delete the command
		msg.channel.bulkDelete(num, true);
		let embed = new Discord.RichEmbed;
		console.log(num);
		embed.setTitle('Done!');
		embed.setColor(color);
		embed.setThumbnail(`${images.delete}`);
		embed.setDescription(`I tried my best to delete ${num} messages.`);
		embed.setFooter('Use '+prefix+'help to see all of my commands');
		msg.channel.send(embed);
	}catch(e){
		throwE(e);
	}
};
  
exports.conf = {
	aliases: ['delet'],
	guildOnly: true,
};
exports.help = {
	name: 'delete',
	description: 'Bulk Delete',
	usage: 'nva:delete (1-99)',
	category: '- Moderation Commands',
};