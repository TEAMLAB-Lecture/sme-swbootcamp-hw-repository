INSERT INTO departments VALUES (101, 'SME', 'SME', 'Engineering');
INSERT INTO departments VALUES (102, 'DEE', 'DEE', 'Engineering');
INSERT INTO departments VALUES (201, 'KLL', 'KLL', 'Human and Social Sciences');
INSERT INTO departments VALUES (202, 'JLL', 'JLL', 'Human and Social Sciences');
INSERT INTO departments VALUES (301, 'IT', 'IT', 'Business Administration');

INSERT INTO professors VALUES (1, 'Choi S.C.', 101);
INSERT INTO professors VALUES (2, 'Seo W.C.', 101);
INSERT INTO professors VALUES (3, 'Yu T.C.', 101);
INSERT INTO professors VALUES (4, 'Lee Y.S.', 101);

INSERT INTO subjects VALUES (1101, 'Algorithm', 1, '', 'JS', '3', 'SME1', 'Tue2, Thu2', '715', '20', 1);
INSERT INTO subjects VALUES (1103, 'System Modeling', 3, '', 'JS', '3', 'SME2', 'Wed2, Fri5', '709', '50', 0);
INSERT INTO subjects VALUES (1104, 'Human Engineering', 4, '', 'JS', '3', 'SME2', 'Thu5', '221', '60', 0);
INSERT INTO subjects VALUES (1105, 'Software Engineering', 1, '', 'JP', '3', 'SME1', 'Mon5', '708', '20', 1);

INSERT INTO trailer VALUES (9001, 1, 1101, '', 0, 'Algorithm OT Video', '');
INSERT INTO trailer VALUES (9002, 3, 1103, '', 1, 'System Modeling OT Video', '');
INSERT INTO trailer VALUES (9003, 1, 1105, '', 0, 'SW Engineering OT Video', '');

INSERT INTO visible_trailer_option VALUES (9002, 'Lots of Reports');

INSERT INTO invisible_trailer_option VALUES (9001, 1);
INSERT INTO invisible_trailer_option VALUES (9003, 0);

INSERT INTO vimeosystem VALUES (9001, 'https://vimeo.com/536743515', 130);
INSERT INTO vimeosystem VALUES (9002, 'https://vimeo.com/536742979', 100);
INSERT INTO vimeosystem VALUES (9003, 'https://vimeo.com/533520341', 27);


