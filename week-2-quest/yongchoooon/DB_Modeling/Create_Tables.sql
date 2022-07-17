CREATE TABLE Departments (
	DepartmentID INT(11) NOT NULL,
    DepartmentMainNM VARCHAR(45) NOT NULL,
    DepartmentNM VARCHAR(45) NOT NULL,
    CollegeNM VARCHAR(45) NOT NULL,
    PRIMARY KEY (DepartmentID)
);

CREATE TABLE Professors (
	ProfessorID INT(11) NOT NULL,
    ProfessorNM VARCHAR(45) NOT NULL,
    DepartmentID INT(11) NULL,
    PRIMARY KEY (ProfessorID),
    FOREIGN KEY (DepartmentID)
		REFERENCES departments (DepartmentID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Subjects (
	SubjectID INT(11) NOT NULL,
    SubjectNM VARCHAR(45) NOT NULL,
    ProfessorID INT(11) NULL,
    Field VARCHAR(45) NULL,
    CompletionDivision CHAR(2) NOT NULL,
    Credit CHAR(6) NOT NULL,
    Organization VARCHAR(10) NOT NULL,
    LectureTime VARCHAR(45) NULL,
    LectureRoom VARCHAR(45) NULL,
    MaxStudentNumber INT(3) NULL,
    OnlineLecture BOOLEAN NULL, 
    PRIMARY KEY (SubjectID),
    FOREIGN KEY (ProfessorID)
		REFERENCES professors (ProfessorID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Trailer (
	TrailerID INT(11) NOT NULL,
    ProfessorID INT(11) NOT NULL,
    SubjectID INT(11) NOT NULL,
    TrailerURL VARCHAR(200) NULL,
    Visibility BOOLEAN NOT NULL,
    Overview TEXT(300) NULL,
    FileIDONTKNOW VARCHAR(100) NULL,
    PRIMARY KEY (TrailerID),
    FOREIGN KEY (ProfessorID)
		REFERENCES professors (ProfessorID) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (SubjectID)
		REFERENCES subjects (SubjectID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Visible_Trailer_Option (
	TrailerID INT(11) NOT NULL,
    Tag TEXT(100) NULL,
    PRIMARY KEY (TrailerID),
    FOREIGN KEY (TrailerID)
		REFERENCES trailer (TrailerID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Invisible_Trailer_Option (
	TrailerID INT(11) NOT NULL,
    DeletionAfterPeriod BOOLEAN NOT NULL,
    PRIMARY KEY (TrailerID),
    FOREIGN KEY (TrailerID)
		REFERENCES trailer (TrailerID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE VimeoSystem (
	TrailerID INT(11) NOT NULL,
	TrailerURL VARCHAR(200) NULL,
    ViewCount INT(9) NOT NULL DEFAULT 0,
    PRIMARY KEY (TrailerID),
    FOREIGN KEY (TrailerID)
		REFERENCES trailer (TrailerID) ON DELETE CASCADE ON UPDATE CASCADE
);