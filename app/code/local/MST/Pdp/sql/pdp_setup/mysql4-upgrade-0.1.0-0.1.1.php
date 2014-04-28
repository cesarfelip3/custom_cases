<?php
$installer = $this;
$installer->startSetup();
$installer->run("
	INSERT INTO {$this->getTable('mst_pdp_group')} (`id`, `title`, `status`, `sort`, `description`) VALUES
	(2, 'T-Shirt Design', 1, 0, 'This is description'),
	(3, 'Hats Design', 1, 1, 'This is description'),
	(13, 'Mugs Design', 1, 2, ''),
	(14, 'Iphone Design', 1, 3, '');
	
	INSERT INTO {$this->getTable('mst_pdp_design')} (`id`, `title`, `price`, `product_id`, `status`, `filename`, `filename_back`, `options`, `pdpgroup`, `position`) VALUES
	(6, 'White T-Shirt', '20', 1, 1, 'Front-1371034582.jpg', 'Back-1371034582.jpg', '', 2, 1),
	(24, 'Gildan Ultra Cotton Tank', '20', 1, 1, 'Front-1373450257.jpg', 'Back-1373450257.jpg', '', 2, 3),
	(30, 'Hat 1', '0', 1, 1, 'Front-1385957756.jpg', 'Back-1385957756.jpg', '', 3, 0),
	(31, 'Mugs Design', '45', 1, 1, 'Front-1385973885.jpg', 'Back-1385973885.jpg', '', 13, 0),
	(32, 'IP4s Case', '20', 1, 1, 'Front-1386062425.png', '', '', 14, 1),
	(33, 'IP5s Skin', '20', 1, 1, 'Front-1386063643.png', '', '', 14, 2),
	(35, 'IP5c Case', '34', 1, 1, 'Front-1386059973.png', '', '', 14, 2);
	
	INSERT INTO {$this->getTable('mst_pdp_design_color')} (`id`, `design_id`, `color_name`, `hexcode`, `filename`, `sort`, `status`, `filename_back`, `price`, `style_image`) VALUES
	(4, 6, 'MidnightBlue', '0f2959', 'DesignColor13734411111.jpg', 1, 0, 'DesignColorBack13734411111.jpg', '4.2', ''),
	(5, 6, 'Crimson', 'de2f25', 'DesignColor13734411112.jpg', 1, 0, 'DesignColorBack13734411112.jpg', '1.8', ''),
	(6, 6, 'SaddleBrown', '542619', 'DesignColor13734411113.jpg', 2, 0, 'DesignColorBack13734411113.jpg', '4.7', ''),
	(8, 6, 'DarkGray', '9c9c9c', 'DesignColor13734428161.jpg', 0, 0, 'DesignColorBack13734428161.jpg', '2', ''),
	(9, 6, 'SteelBlue', '024578', 'DesignColor13734428172.jpg', 0, 0, 'DesignColorBack13734428172.jpg', '1', ''),
	(10, 6, 'SeaGreen', '123D2C', 'DesignColor13734428173.jpg', 0, 0, 'DesignColorBack13734428173.jpg', '0.9', ''),
	(11, 6, 'CornflowerBlue', '6b8ac1', 'DesignColor13734428174.jpg', 0, 0, 'DesignColorBack13734428174.jpg', '0.5', ''),
	(12, 6, 'Sienna', 'a85e36', 'DesignColor13734429691.jpg', 0, 0, 'DesignColorBack13734429701.jpg', '2.6', ''),
	(17, 24, 'DimGray', '4D4D4D', 'DesignColor13734505681.jpg', 0, 0, 'DesignColorBack13734505681.jpg', '', ''),
	(18, 24, 'DarkSlateBlue', '41225D', 'DesignColor13734506191.jpg', 0, 0, 'DesignColorBack13734506191.jpg', '', ''),
	(19, 24, 'DarkRed', '8B1F36', 'DesignColor13734506681.jpg', 0, 0, 'DesignColorBack13734506681.jpg', '', ''),
	(21, 28, 'Crimson', 'd4151b', 'DesignColor13740290701.png', 0, 0, 'DesignColorBack13740290701.png', '5', ''),
	(22, 30, '', '141214', 'DesignColor13859730101.jpg', 0, 0, 'DesignColorBack13859730101.jpg', '', ''),
	(23, 30, '', 'e81e25', 'DesignColor13859730102.jpg', 0, 0, 'DesignColorBack13859730102.jpg', '', ''),
	(24, 30, '', '494d52', 'DesignColor13859730103.jpg', 0, 0, 'DesignColorBack13859730103.jpg', '', ''),
	(25, 31, '', 'e8e0b1', 'DesignColor13859758601.jpg', 0, 0, 'DesignColorBack13859758601.jpg', '', ''),
	(26, 31, '', '1a181a', 'DesignColor13859758602.jpg', 0, 0, 'DesignColorBack13859758602.jpg', '', ''),
	(27, 31, '', '27704d', 'DesignColor13859758603.jpg', 0, 0, 'DesignColorBack13859758603.jpg', '', ''),
	(48, 33, '', 'f1aa78', 'DesignColor13891924691.png', 0, 0, '', '', 'StyleImage13891924691.png'),
	(49, 33, '', 'a1572c', 'DesignColor13891924692.png', 0, 0, '', '', 'StyleImage13891924692.png'),
	(50, 33, '', 'fae5c6', 'DesignColor13891924693.png', 0, 0, '', '', 'StyleImage13891924693.png'),
	(51, 33, '', '37373a', 'DesignColor13891924694.png', 0, 0, '', '', 'StyleImage13891924694.png'),
	(52, 32, '', '8a522d', 'DesignColor13891942081.png', 0, 0, '', '', 'StyleImage13891942081.png'),
	(53, 32, '', 'f7a363', 'DesignColor13891942082.png', 0, 0, '', '', 'StyleImage13891942082.png'),
	(54, 32, '', '36373b', 'DesignColor13891942083.png', 0, 0, '', '', 'StyleImage13891942083.png'),
	(55, 32, '', 'efa774', 'DesignColor13891942084.png', 0, 0, '', '', 'StyleImage13891942084.png');
	
	INSERT INTO {$this->getTable('mst_pdp_artwork_category')} (`id`, `title`, `status`, `position`) VALUES
	(4, 'Animals', 1, 0),
	(7, 'Funny', 1, 0),
	(8, 'Kid', 1, 1),
	(9, 'Love', 1, 0),
	(11, 'Cartoon', 1, 1),
	(13, 'Callouts', 2, 2);
	
	INSERT INTO {$this->getTable('mst_pdp_images')} (`image_id`, `image_type`, `filename`, `category`, `color`, `position`) VALUES
	(197, 'custom', 'Custom-Image-1372002019.png', '4', '', 0),
	(198, 'custom', 'Custom-Image-1372002021.png', '4', '', 0),
	(202, 'custom', 'Custom-Image-1372002029.png', '4', '', 0),
	(203, 'custom', 'Custom-Image-1372002030.png', '4', '', 0),
	(204, 'custom', 'Custom-Image-1372002032.png', '4', '', 0),
	(213, 'custom', 'Custom-Image-1372002048.png', '4', '', 0),
	(235, 'custom', 'Custom-Image-1372002087.png', '4', '', 0),
	(236, 'custom', 'Custom-Image-1372002089.png', '4', '', 0),
	(241, 'custom', 'Custom-Image-1372002099.png', '4', '', 0),
	(312, 'custom', 'Custom-Image-1372047802.png', '8', '', 0),
	(313, 'custom', 'Custom-Image-1372047805.png', '8', '', 0),
	(314, 'custom', 'Custom-Image-1372047807.png', '8', '', 0),
	(315, 'custom', 'Custom-Image-1372047809.png', '8', '', 0),
	(316, 'custom', 'Custom-Image-1372047811.png', '8', '', 0),
	(317, 'custom', 'Custom-Image-1372047813.png', '8', '', 0),
	(319, 'custom', 'Custom-Image-1372047816.png', '8', '', 0),
	(321, 'custom', 'Custom-Image-1372047820.png', '8', '', 0),
	(322, 'custom', 'Custom-Image-1372047821.png', '8', '', 0),
	(323, 'custom', 'Custom-Image-1372047823.png', '8', '', 0),
	(325, 'custom', 'Custom-Image-1372047827.png', '8', '', 0),
	(326, 'custom', 'Custom-Image-1372047828.png', '8', '', 0),
	(328, 'custom', 'Custom-Image-1372047831.png', '8', '', 0),
	(329, 'custom', 'Custom-Image-1372047832.png', '8', '', 0),
	(343, 'custom', 'Custom-Image-1372058949.png', '11', '', 0),
	(344, 'custom', 'Custom-Image-1372058950.png', '11', '', 0),
	(345, 'custom', 'Custom-Image-1372058952.png', '11', '', 0),
	(346, 'custom', 'Custom-Image-1372058953.png', '11', '', 0),
	(347, 'custom', 'Custom-Image-1372058955.png', '11', '', 0),
	(349, 'custom', 'Custom-Image-1372058957.png', '11', '', 0),
	(351, 'custom', 'Custom-Image-1372058960.png', '11', '', 0),
	(352, 'custom', 'Custom-Image-1372148111.png', '13', '', 0),
	(353, 'custom', 'Custom-Image-1372148113.png', '13', '', 0),
	(354, 'custom', 'Custom-Image-1372148114.png', '13', '', 0),
	(355, 'custom', 'Custom-Image-1372148116.png', '13', '', 0),
	(356, 'custom', 'Custom-Image-1372148118.png', '13', '', 0),
	(357, 'custom', 'Custom-Image-1372148120.png', '13', '', 0),
	(358, 'custom', 'Custom-Image-1372148121.png', '13', '', 0),
	(359, 'custom', 'Custom-Image-1372148123.png', '13', '', 0),
	(360, 'custom', 'Custom-Image-1372148124.png', '13', '', 0),
	(361, 'custom', 'Custom-Image-1372148125.png', '13', '', 0),
	(362, 'custom', 'Custom-Image-1372148126.png', '13', '', 0),
	(364, 'custom', 'Custom-Image-1372148129.png', '13', '', 0),
	(374, 'custom', 'Custom-Image-1372149763.png', '9', '', 0),
	(376, 'custom', 'Custom-Image-1372149765.png', '4', '', 0),
	(377, 'custom', 'Custom-Image-1372149767.png', '9', '', 0),
	(378, 'custom', 'Custom-Image-1372149768.png', '4', '', 0),
	(379, 'custom', 'Custom-Image-1372149769.png', '9', '', 0),
	(380, 'custom', 'Custom-Image-1372150461.png', '9', '', 0),
	(381, 'custom', 'Custom-Image-1372150464.png', '9', '', 0),
	(382, 'custom', 'Custom-Image-1372150465.png', '9', '', 0),
	(383, 'custom', 'Custom-Image-1372150467.png', '9', '', 0),
	(384, 'custom', 'Custom-Image-1372150622.png', '9', '', 0),
	(385, 'custom', 'Custom-Image-1372150895.png', '9', '', 0),
	(425, 'custom', 'Custom-Image-1374805878.png', '4', '', 0),
	(426, 'custom', 'Custom-Image-1374805880.png', '4', '', 0),
	(428, 'custom', 'Custom-Image-1374805882.png', '4', '', 0),
	(430, 'custom', 'Custom-Image-1374805884.png', '4', '', 10),
	(439, 'custom', 'Custom-Image-1374806198.png', '4', '', 0),
	(467, 'custom', 'Custom-Image-1377660896.png', '7', '', 0),
	(468, 'custom', 'Custom-Image-1377660897.png', '7', '', 0),
	(469, 'custom', 'Custom-Image-1377660898.png', '7', '', 0),
	(470, 'custom', 'Custom-Image-1377660899.png', '7', '', 0),
	(471, 'custom', 'Custom-Image-1377660900.png', '7', '', 0),
	(472, 'custom', 'Custom-Image-1377660902.png', '7', '', 0),
	(473, 'custom', 'Custom-Image-1377660903.png', '7', '', 0),
	(474, 'custom', 'Custom-Image-1377660904.png', '7', '', 0),
	(475, 'custom', 'Custom-Image-1377660905.png', '7', '', 0),
	(476, 'custom', 'Custom-Image-1377660906.png', '7', '', 0),
	(477, 'custom', 'Custom-Image-1377660907.png', '7', '', 0),
	(478, 'custom', 'Custom-Image-1377660908.png', '7', '', 0),
	(479, 'custom', 'Custom-Image-1377660910.png', '7', '', 0),
	(480, 'custom', 'Custom-Image-1377660911.png', '7', '', 0),
	(481, 'custom', 'Custom-Image-1377660912.png', '7', '', 0),
	(482, 'custom', 'Custom-Image-1377660913.png', '7', '', 0),
	(483, 'custom', 'Custom-Image-1377660914.png', '4', '', 0),
	(484, 'custom', 'Custom-Image-1377660915.png', '7', '', 0),
	(485, 'custom', 'Custom-Image-1377660916.png', '7', '', 0),
	(486, 'custom', 'Custom-Image-1377660917.png', '7', '', 0),
	(487, 'custom', 'Custom-Image-1377660918.png', '7', '', 0),
	(488, 'custom', 'Custom-Image-1377660919.png', '7', '', 0),
	(489, 'custom', 'Custom-Image-1377660921.png', '7', '', 0),
	(490, 'custom', 'Custom-Image-1377660922.png', '7', '', 0),
	(491, 'custom', 'Custom-Image-1377660923.png', '7', '', 0),
	(492, 'custom', 'Custom-Image-1377660924.png', '7', '', 0),
	(493, 'custom', 'Custom-Image-1377660925.png', '7', '', 0),
	(494, 'custom', 'Custom-Image-1377660926.png', '7', '', 0),
	(495, 'custom', 'Custom-Image-1377660928.png', '7', '', 0),
	(496, 'custom', 'Custom-Image-1377660929.png', '7', '', 0),
	(497, 'custom', 'Custom-Image-1377660930.png', '7', '', 0),
	(498, 'custom', 'Custom-Image-1377660932.png', '7', '', 0),
	(499, 'custom', 'Custom-Image-1377660933.png', '7', '', 0),
	(500, 'custom', 'Custom-Image-1377660934.png', '7', '', 0),
	(501, 'custom', 'Custom-Image-1377660935.png', '7', '', 0),
	(502, 'custom', 'Custom-Image-1377660936.png', '7', '', 0),
	(503, 'custom', 'Custom-Image-1377660937.png', '7', '', 0),
	(504, 'custom', 'Custom-Image-1377660939.png', '7', '', 0),
	(505, 'custom', 'Custom-Image-1377660940.png', '7', '', 0),
	(506, 'custom', 'Custom-Image-1377660941.png', '7', '', 0),
	(508, 'custom', 'Custom-Image-1377660943.png', '7', '', 0),
	(509, 'custom', 'Custom-Image-1377661025.png', '8', '', 0),
	(510, 'custom', 'Custom-Image-1377661027.png', '8', '', 0),
	(511, 'custom', 'Custom-Image-1377661028.png', '8', '', 0),
	(512, 'custom', 'Custom-Image-1377661029.png', '8', '', 0),
	(513, 'custom', 'Custom-Image-1377661030.png', '8', '', 0),
	(514, 'custom', 'Custom-Image-1377661031.png', '8', '', 0),
	(515, 'custom', 'Custom-Image-1377661032.png', '8', '', 0),
	(516, 'custom', 'Custom-Image-1377661033.png', '8', '', 0),
	(517, 'custom', 'Custom-Image-1377661034.png', '8', '', 0),
	(518, 'custom', 'Custom-Image-1377661036.png', '8', '', 0),
	(519, 'custom', 'Custom-Image-1377661037.png', '8', '', 0),
	(520, 'custom', 'Custom-Image-1377661038.png', '8', '', 0),
	(521, 'custom', 'Custom-Image-1377661039.png', '4', '', 0),
	(522, 'custom', 'Custom-Image-1377661040.png', '8', '', 0),
	(523, 'custom', 'Custom-Image-1377661041.png', '8', '', 0),
	(524, 'custom', 'Custom-Image-1377661042.png', '8', '', 0),
	(525, 'custom', 'Custom-Image-1377661043.png', '8', '', 0),
	(526, 'custom', 'Custom-Image-1377661044.png', '8', '', 0),
	(527, 'custom', 'Custom-Image-1377661046.png', '8', '', 0),
	(528, 'custom', 'Custom-Image-1377661047.png', '8', '', 0),
	(529, 'custom', 'Custom-Image-1377661048.png', '8', '', 0),
	(530, 'custom', 'Custom-Image-1377661049.png', '8', '', 0),
	(531, 'custom', 'Custom-Image-1377661050.png', '8', '', 0),
	(532, 'custom', 'Custom-Image-1377661051.png', '8', '', 0),
	(533, 'custom', 'Custom-Image-1377661052.png', '8', '', 0),
	(534, 'custom', 'Custom-Image-1377661053.png', '8', '', 0),
	(535, 'custom', 'Custom-Image-1377661054.png', '8', '', 0),
	(536, 'custom', 'Custom-Image-1377661055.png', '4', '', 0),
	(537, 'custom', 'Custom-Image-1377661056.png', '8', '', 0),
	(538, 'custom', 'Custom-Image-1377661057.png', '4', '', 0),
	(539, 'custom', 'Custom-Image-1377661058.png', '8', '', 0),
	(540, 'custom', 'Custom-Image-1377661059.png', '8', '', 0),
	(541, 'custom', 'Custom-Image-1377661060.png', '8', '', 0),
	(542, 'custom', 'Custom-Image-1377661061.png', '8', '', 0),
	(543, 'custom', 'Custom-Image-1377661063.png', '8', '', 0),
	(544, 'custom', 'Custom-Image-1377661064.png', '8', '', 0),
	(545, 'custom', 'Custom-Image-1377661065.png', '8', '', 0),
	(546, 'custom', 'Custom-Image-1377661066.png', '4', '', 0),
	(547, 'custom', 'Custom-Image-1389407140.png', '4', '', 0),
	(548, 'custom', 'Custom-Image-1389407442.png', '4', '', 0);
	
	INSERT INTO {$this->getTable('mst_pdp_image_color')} (`id`, `image_id`, `filename`, `color`, `filename_back`) VALUES
	(12, 351, 'ColorImage_1372126871.png', 'fff200', ''),
	(13, 351, 'ColorImage_1372126913.png', '00ffaa', ''),
	(14, 349, 'ColorImage_1372127650.png', '00b7ff', ''),
	(15, 349, 'ColorImage_1372127681.png', 'FFFFFF', ''),
	(16, 347, 'ColorImage_1372134993.png', '9e6d23', ''),
	(17, 364, 'ColorImage_1372148204.png', 'acacb5', ''),
	(18, 364, 'ColorImage_1372148240.png', 'e84eed', ''),
	(19, 364, 'ColorImage_1372148274.png', 'ff4000', ''),
	(20, 364, 'ColorImage_1372148327.png', 'fcfcfc', ''),
	(21, 364, 'ColorImage_1372148374.png', 'ffff00', ''),
	(22, 374, 'ColorImage_1372150033.png', '00ff80', ''),
	(23, 374, 'ColorImage_1372150070.png', 'ffd000', ''),
	(52, 430, 'ArtworkColor13778577902.png', 'ffffff', ''),
	(53, 430, 'ArtworkColor13778577903.png', '007bff', ''),
	(54, 430, 'ArtworkColor13778577904.png', 'ff6600', ''),
	(55, 430, 'ArtworkColor13778577905.png', 'ff9900', ''),
	(56, 430, 'ArtworkColor13778577906.png', 'ff0303', ''),
	(57, 547, 'ArtworkColor13894072891.png', '40bd59', ''),
	(58, 547, 'ArtworkColor13894072892.png', 'e67d20', ''),
	(59, 547, 'ArtworkColor13894072893.png', 'f0e518', ''),
	(60, 547, 'ArtworkColor13894072894.png', 'e83737', ''),
	(61, 548, 'ArtworkColor13894075561.png', 'e86017', ''),
	(62, 548, 'ArtworkColor13894075562.png', 'a84aa8', ''),
	(63, 548, 'ArtworkColor13894075563.png', 'f2cd13', ''),
	(64, 548, 'ArtworkColor13894075564.png', 'e01d1d', '');
	
	INSERT INTO {$this->getTable('mst_pdp_options')} (`id`, `design_id`, `option_label`, `price`, `sort`) VALUES
	(14, 27, 'M', '5', 2),
	(15, 27, 'L', '3', 3),
	(16, 27, 'XL', '5', 4),
	(17, 0, '', '', 0),
	(27, 26, 'S', '', 0),
	(28, 26, 'M', '', 0),
	(29, 26, 'L', '', 0),
	(30, 28, 'S', '', 0),
	(31, 28, 'M', '', 0),
	(32, 28, 'L', '', 0),
	(38, 0, '', '', 0),
	(54, 25, 'S', '', 0),
	(55, 25, 'M', '', 0),
	(56, 25, 'L', '', 0),
	(57, 0, '', '', 0),
	(58, 0, '', '', 0),
	(67, 24, 'S', '1', 0),
	(68, 24, 'M', '2', 0),
	(69, 24, 'L', '3', 0),
	(80, 6, 'S', '1', 0),
	(81, 6, 'M', '2', 1),
	(82, 6, 'L', '3', 2),
	(83, 6, 'XL', '4.3', 3),
	(84, 6, 'XXL', '5.7', 4);
	
	INSERT INTO {$this->getTable('mst_pdp_printarea')} (`id`, `title`, `price`, `canvas_w`, `canvas_h`, `canvas_t`, `canvas_l`, `status`, `filename`, `position`) VALUES
	(9, '', '', '171', '308', '125', '173', 1, 'Front-1371004751.jpg', 0),
	(10, '', '', '194', '344', '80', '164', 1, 'Back-1371004752.jpg', 0),
	(11, '', '', '203', '234', '102', '170', 1, 'Front-1371033810.jpg', 0),
	(12, '', '', '190', '180', '227', '189', 1, 'Back-1371033810.jpg', 0),
	(13, '', '', '256', '395', '63', '130', 1, 'Front-1371260159.jpg', 0),
	(14, '', '', '250', '434', '55', '131', 1, 'Back-1371260159.jpg', 0),
	(15, '', '', '247', '384', '77', '135', 1, 'Front-1371034582.jpg', 0),
	(16, '', '', '254', '437', '50', '130', 1, 'Back-1371034582.jpg', 0),
	(17, '', '', '255', '386', '72', '128', 1, 'Front-1371260557.jpg', 0),
	(18, '', '', '253', '436', '51', '129', 1, 'Back-1371260557.jpg', 0),
	(19, '', '', '369', '340', '69', '104', 1, 'Front-1371260627.jpg', 0),
	(20, '', '', '513', '490', '0', '0', 1, 'Back-1371260627.jpg', 0),
	(21, '', '', '252', '385', '74', '131', 1, 'Front-1371261790.jpg', 0),
	(22, '', '', '254', '438', '50', '129', 1, 'Back-1371261790.jpg', 0),
	(23, '', '', '252', '381', '77', '131', 1, 'Front-1371261915.jpg', 0),
	(24, '', '', '254', '436', '50', '131', 1, 'Back-1371261915.jpg', 0),
	(25, '', '', '246', '366', '80', '130', 1, 'Front-1371262068.jpg', 0),
	(26, '', '', '249', '433', '55', '134', 1, 'Back-1371262068.jpg', 0),
	(27, '', '', '250', '366', '83', '128', 1, 'Front-1371262233.jpg', 0),
	(28, '', '', '253', '431', '58', '132', 1, 'Back-1371262233.jpg', 0),
	(29, '', '', '244', '356', '85', '131', 1, 'Front-1371262459.jpg', 0),
	(30, '', '', '250', '432', '55', '133', 1, 'Back-1371262459.jpg', 0),
	(31, '', '', '245', '367', '86', '133', 1, 'Front-1371262657.jpg', 0),
	(32, '', '', '252', '432', '55', '133', 1, 'Back-1371262657.jpg', 0),
	(33, '', '', '242', '378', '81', '133', 1, 'Front-1371262800.jpg', 0),
	(34, '', '', '253', '432', '56', '134', 1, 'Back-1371262800.jpg', 0),
	(35, '', '', '247', '366', '83', '129', 1, 'Front-1371262967.jpg', 0),
	(36, '', '', '255', '431', '57', '131', 1, 'Back-1371262967.jpg', 0),
	(37, '', '', '179', '352', '73', '109', 1, 'Front-1371267767.png', 0),
	(38, '', '', '181', '393', '28', '98', 1, 'Back-1371267767.png', 0),
	(39, '', '', '179', '349', '78', '100', 1, 'Front-1371267888.png', 0),
	(40, '', '', '182', '391', '29', '95', 1, 'Back-1371267888.png', 0),
	(41, '', '', '193', '297', '129', '65', 1, 'Front-1371268032.png', 0),
	(42, '', '', '191', '370', '61', '73', 1, 'Back-1371268032.png', 0),
	(43, '', '', '187', '324', '76', '95', 1, 'Front-1371280768.png', 0),
	(44, '', '', '183', '376', '34', '109', 1, 'Back-1371280768.png', 0),
	(45, '', '', '178', '208', '65', '114', 1, 'Front-1371280865.png', 0),
	(46, '', '', '160', '203', '68', '117', 1, 'Back-1371280865.png', 0),
	(47, '', '', '267', '297', '74', '77', 1, 'Front-1371281092.png', 0),
	(48, '', '', '267', '321', '56', '74', 1, 'Back-1371281092.png', 0),
	(49, '', '', '269', '294', '78', '75', 1, 'Front-1371281930.png', 0),
	(50, '', '', '270', '319', '53', '69', 1, 'Back-1371281980.png', 0),
	(51, '', '', '271', '296', '75', '72', 1, 'Front-1371282227.png', 0),
	(52, '', '', '269', '322', '55', '70', 1, 'Back-1371282227.png', 0),
	(53, '', '', '204', '337', '77', '108', 1, 'Front-1371282355.png', 0),
	(54, '', '', '205', '358', '41', '108', 1, 'Back-1371282355.png', 0),
	(55, '', '', '172', '126', '32', '48', 1, 'Front-1371283398.png', 0),
	(56, '', '', '189', '132', '38', '52', 1, 'Back-1371283399.png', 0),
	(57, '', '', '249', '330', '129', '135', 1, 'Front-1373450257.jpg', 0),
	(58, '', '', '242', '417', '64', '132', 1, 'Back-1373450257.jpg', 0),
	(59, '', '', '177', '353', '71', '109', 1, 'Front-1373451589.png', 0),
	(60, '', '', '173', '344', '54', '102', 1, 'Back-1373451589.png', 0),
	(61, '', '', '184', '303', '131', '68', 1, 'Front-1373451708.png', 0),
	(62, '', '', '193', '305', '122', '70', 1, 'Back-1373451709.png', 0),
	(63, '', '', '183', '313', '79', '95', 1, 'Front-1373452039.png', 0),
	(64, '', '', '180', '366', '41', '108', 1, 'Back-1373452039.png', 0),
	(65, '', '', '154', '202', '69', '123', 1, 'Front-1373452156.png', 0),
	(66, '', '', '135', '139', '149', '131', 1, 'Back-1373452156.png', 0),
	(67, '', '', '254', '191', '103', '123', 1, 'Front-1376471890.jpg', 0),
	(68, '', '', '356', '57', '169', '22', 1, 'Back-1376471890.jpg', 0),
	(69, '', '', '256', '256', '0', '0', 1, 'Front-1377135456.png', 0),
	(70, '', '', '256', '256', '0', '0', 1, 'Back-1377135457.png', 0),
	(71, '', '', '509', '584', '0', '0', 1, 'Front-1383121284.png', 0),
	(72, '', '', '513', '588', '0', '0', 1, 'Back-1383121284.png', 0),
	(73, '', '', '394', '266', '49', '55', 1, 'Front-1385957756.jpg', 0),
	(74, '', '', '424', '251', '44', '50', 1, 'Back-1385957756.jpg', 0),
	(75, '', '', '281', '366', '42', '42', 1, 'Front-1385973885.jpg', 0),
	(76, '', '', '282', '359', '48', '185', 1, 'Back-1385973885.jpg', 0),
	(77, '', '', '306', '608', '0', '0', 1, 'Front-1386062425.png', 0),
	(78, '', '', '306', '608', '0', '0', 1, 'Back-1386062425.png', 0),
	(79, '', '', '306', '655', '0', '0', 1, 'Front-1386063643.png', 0),
	(80, '', '', '306', '655', '0', '0', 1, 'Back-1386063643.png', 0),
	(81, '', '', '307', '546', '0', '0', 1, 'Front-1386042661.png', 0),
	(82, '', '', '307', '546', '0', '0', 1, 'Back-1386042661.png', 0),
	(83, '', '', '306', '673', '0', '0', 1, 'Front-1386059973.png', 0),
	(84, '', '', '306', '673', '0', '0', 1, 'Back-1386059973.png', 0),
	(85, '', '', '306', '655', '0', '0', 1, 'Front-1386123345.png', 0),
	(86, '', '', '306', '655', '0', '0', 1, 'Front-1386124814.png', 0),
	(87, '', '', '306', '655', '0', '0', 1, 'Front-1386124859.png', 0),
	(88, '', '', '306', '655', '0', '0', 1, 'Front-1386124908.png', 0),
	(89, '', '', '306', '655', '0', '0', 1, 'Front-1386125234.png', 0),
	(90, '', '', '396', '246', '0', '0', 1, 'Front-1386130685.png', 0),
	(91, '', '', '396', '246', '0', '0', 1, 'Back-1386130685.png', 0),
	(92, '', '', '317', '320', '88', '86', 1, 'Front-1389088372.jpg', 0),
	(93, '', '', '223', '375', '95', '123', 1, 'Back-1389088372.jpg', 0),
	(94, '', '', '371', '326', '77', '29', 1, 'Front-1389088480.jpg', 0),
	(95, '', '', '275', '341', '108', '123', 1, 'Back-1389088480.jpg', 0);
	
	INSERT INTO {$this->getTable('mst_pdp_fonts')} (`font_id`, `name`, `ext`) VALUES
	(8, 'CENSCBK', 'TTF'),
	(16, 'CHILLER', 'TTF'),
	(42, 'abaddon', 'TTF'),
	(44, 'AdineKirnberg-Script', 'ttf'),
	(52, 'CanGoods', 'ttf'),
	(53, 'Carrington', 'ttf'),
	(56, 'dc_s', 'ttf'),
	(57, 'DEFTONE', 'TTF'),
	(58, 'degrassi', 'ttf'),
	(64, 'FerroRosso', 'ttf'),
	(65, 'FIRESTARTER', 'TTF'),
	(68, 'FONTLERO', 'TTF'),
	(70, 'FREEBSCA', 'ttf'),
	(80, 'Jellofont', 'ttf'),
	(82, 'LOKICOLA', 'TTF'),
	(86, 'musicals', 'ttf'),
	(87, 'NAILED', 'ttf'),
	(95, 'QUIGLEYW', 'TTF'),
	(96, 'SABRINA_', 'TTF'),
	(104, 'sketchy', 'ttf'),
	(108, 'tatu_font', 'ttf'),
	(109, 'Twinkle', 'ttf'),
	(113, 'Yahoo', 'ttf');
");
$installer->endSetup(); 