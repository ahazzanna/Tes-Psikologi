// ===== PSYCHOLOGY TEST SYSTEM =====
class PsychologyTestSystem {
    constructor() {
        this.currentView = 'student';
        this.currentTestPhase = 'biodata';
        this.currentEmployee = null;
        this.sessionId = null;
        
        // DISC Test Data
        this.discCurrentQuestion = 0;
        this.discAnswers = {};
        this.discQuestions = [
            {
                id: 1,
                text: "Saya adalah orang yang...",
                options: [
                    { text: "Tegas", dimension: "D" },
                    { text: "Ramah", dimension: "I" },
                    { text: "Teratur", dimension: "C" },
                    { text: "Kreatif", dimension: "I" }
                ]
            },
            {
                id: 2,
                text: "Dalam bekerja, saya cenderung...",
                options: [
                    { text: "Kompetitif", dimension: "D" },
                    { text: "Optimis", dimension: "I" },
                    { text: "Stabil", dimension: "S" },
                    { text: "Teliti", dimension: "C" }
                ]
            },
            {
                id: 3,
                text: "Orang-orang mengenal saya sebagai seseorang yang...",
                options: [
                    { text: "Berani", dimension: "D" },
                    { text: "Ekspresif", dimension: "I" },
                    { text: "Setia", dimension: "S" },
                    { text: "Perfeksionis", dimension: "C" }
                ]
            },
            {
                id: 4,
                text: "Saya lebih suka menjadi orang yang...",
                options: [
                    { text: "Ambisius", dimension: "D" },
                    { text: "Persuasif", dimension: "I" },
                    { text: "Sabar", dimension: "S" },
                    { text: "Analitis", dimension: "C" }
                ]
            },
            {
                id: 5,
                text: "Dalam situasi kerja, saya adalah orang yang...",
                options: [
                    { text: "Mandiri", dimension: "D" },
                    { text: "Antusias", dimension: "I" },
                    { text: "Toleran", dimension: "S" },
                    { text: "Akurat", dimension: "C" }
                ]
            },
            {
                id: 6,
                text: "Karakter saya yang paling menonjol adalah...",
                options: [
                    { text: "Dominan", dimension: "D" },
                    { text: "Spontan", dimension: "I" },
                    { text: "Konsisten", dimension: "S" },
                    { text: "Disiplin", dimension: "C" }
                ]
            },
            {
                id: 7,
                text: "Saya dikenal sebagai orang yang...",
                options: [
                    { text: "Teguh pendirian", dimension: "D" },
                    { text: "Ceria", dimension: "I" },
                    { text: "Penolong", dimension: "S" },
                    { text: "Sistematis", dimension: "C" }
                ]
            },
            {
                id: 8,
                text: "Dalam mengambil keputusan, saya...",
                options: [
                    { text: "Cepat ambil keputusan", dimension: "D" },
                    { text: "Mudah bergaul", dimension: "I" },
                    { text: "Tenang", dimension: "S" },
                    { text: "Terorganisir", dimension: "C" }
                ]
            },
            {
                id: 9,
                text: "Gaya kerja saya adalah...",
                options: [
                    { text: "Kompetitif", dimension: "D" },
                    { text: "Energik", dimension: "I" },
                    { text: "Setia", dimension: "S" },
                    { text: "Perfeksionis", dimension: "C" }
                ]
            },
            {
                id: 10,
                text: "Saya cenderung menjadi orang yang...",
                options: [
                    { text: "Ambisius", dimension: "D" },
                    { text: "Bersemangat", dimension: "I" },
                    { text: "Toleran", dimension: "S" },
                    { text: "Akurat", dimension: "C" }
                ]
            },
            {
                id: 11,
                text: "Dalam tim, saya adalah orang yang...",
                options: [
                    { text: "Menantang", dimension: "D" },
                    { text: "Ekspresif", dimension: "I" },
                    { text: "Penyayang", dimension: "S" },
                    { text: "Teratur", dimension: "C" }
                ]
            },
            {
                id: 12,
                text: "Karakteristik utama saya adalah...",
                options: [
                    { text: "Tegas", dimension: "D" },
                    { text: "Ramah", dimension: "I" },
                    { text: "Stabil", dimension: "S" },
                    { text: "Analitis", dimension: "C" }
                ]
            },
            {
                id: 13,
                text: "Saya lebih suka dikenal sebagai orang yang...",
                options: [
                    { text: "Berorientasi hasil", dimension: "D" },
                    { text: "Optimis", dimension: "I" },
                    { text: "Sabar", dimension: "S" },
                    { text: "Perfeksionis", dimension: "C" }
                ]
            },
            {
                id: 14,
                text: "Dalam bekerja, saya cenderung...",
                options: [
                    { text: "Agresif", dimension: "D" },
                    { text: "Persuasif", dimension: "I" },
                    { text: "Konsisten", dimension: "S" },
                    { text: "Sistematis", dimension: "C" }
                ]
            },
            {
                id: 15,
                text: "Sifat saya yang paling kuat adalah...",
                options: [
                    { text: "Percaya diri", dimension: "D" },
                    { text: "Ceria", dimension: "I" },
                    { text: "Penolong", dimension: "S" },
                    { text: "Disiplin", dimension: "C" }
                ]
            },
            {
                id: 16,
                text: "Orang lain melihat saya sebagai orang yang...",
                options: [
                    { text: "Teguh pendirian", dimension: "D" },
                    { text: "Spontan", dimension: "I" },
                    { text: "Tenang", dimension: "S" },
                    { text: "Teliti", dimension: "C" }
                ]
            },
            {
                id: 17,
                text: "Dalam situasi sulit, saya...",
                options: [
                    { text: "Ambisius", dimension: "D" },
                    { text: "Ekspresif", dimension: "I" },
                    { text: "Loyal", dimension: "S" },
                    { text: "Analitis", dimension: "C" }
                ]
            },
            {
                id: 18,
                text: "Pendekatan saya dalam bekerja adalah...",
                options: [
                    { text: "Dominan", dimension: "D" },
                    { text: "Antusias", dimension: "I" },
                    { text: "Toleran", dimension: "S" },
                    { text: "Perfeksionis", dimension: "C" }
                ]
            },
            {
                id: 19,
                text: "Saya dikenal sebagai pribadi yang...",
                options: [
                    { text: "Kompetitif", dimension: "D" },
                    { text: "Bersemangat", dimension: "I" },
                    { text: "Setia", dimension: "S" },
                    { text: "Teratur", dimension: "C" }
                ]
            },
            {
                id: 20,
                text: "Gaya komunikasi saya cenderung...",
                options: [
                    { text: "Cepat ambil keputusan", dimension: "D" },
                    { text: "Mudah bergaul", dimension: "I" },
                    { text: "Sabar", dimension: "S" },
                    { text: "Akurat", dimension: "C" }
                ]
            },
            {
                id: 21,
                text: "Dalam kelompok, saya adalah orang yang...",
                options: [
                    { text: "Percaya diri", dimension: "D" },
                    { text: "Ramah", dimension: "I" },
                    { text: "Konsisten", dimension: "S" },
                    { text: "Sistematis", dimension: "C" }
                ]
            },
            {
                id: 22,
                text: "Saya lebih suka menjadi sosok yang...",
                options: [
                    { text: "Agresif", dimension: "D" },
                    { text: "Ceria", dimension: "I" },
                    { text: "Penyayang", dimension: "S" },
                    { text: "Disiplin", dimension: "C" }
                ]
            },
            {
                id: 23,
                text: "Karakter kerja saya yang menonjol adalah...",
                options: [
                    { text: "Tegas", dimension: "D" },
                    { text: "Persuasif", dimension: "I" },
                    { text: "Tenang", dimension: "S" },
                    { text: "Teliti", dimension: "C" }
                ]
            },
            {
                id: 24,
                text: "Saya paling cocok digambarkan sebagai orang yang...",
                options: [
                    { text: "Menantang", dimension: "D" },
                    { text: "Optimis", dimension: "I" },
                    { text: "Loyal", dimension: "S" },
                    { text: "Analitis", dimension: "C" }
                ]
            }
        ];

        // Kraepelin Test Data
        this.kraepelinTimer = null;
        this.kraepelinTimeRemaining = 600;
        this.kraepelinAnswers = {};
        this.kraepelinCorrectAnswers = {};
        this.numbersGrid = [];
        this.kraepelinStartTime = null;

        // Admin Data
        this.isAdminLoggedIn = false;
        this.employees = [];
        this.discScores = [];
        this.pauliResults = [];

        // Chart Instances
        this.discChartInstance = null;
        this.pauliChartInstance = null;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupFormValidation();
        this.checkExistingSession();
    }

    setupEventListeners() {
        // Tab navigation
        const tabBiodata = document.getElementById('tabBiodata');
        const tabAdmin = document.getElementById('tabAdmin');
        if (tabBiodata) tabBiodata.addEventListener('click', () => this.showStudentView());
        if (tabAdmin) tabAdmin.addEventListener('click', () => this.showAdminView());

        // Biodata form
        document.getElementById('biodataForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleBiodataSubmit();
        });

        // Position dropdown
        document.getElementById('posisi').addEventListener('change', (e) => {
            this.handlePositionChange(e.target.value);
        });

        // DISC Test
        document.getElementById('startDiscBtn').addEventListener('click', () => this.startDiscTest());
        document.getElementById('discPrevBtn').addEventListener('click', () => this.discPreviousQuestion());
        document.getElementById('discEditBtn').addEventListener('click', () => this.editDiscAnswers());
        document.getElementById('submitDiscBtn').addEventListener('click', () => this.submitDiscTest());

        // Kraepelin Test
        document.getElementById('startKraepelinBtn').addEventListener('click', () => this.startKraepelinTest());
        document.getElementById('submitKraepelinBtn').addEventListener('click', () => this.endKraepelinTest());
        document.getElementById('submitKraepelinBtn2').addEventListener('click', () => this.endKraepelinTest());

        // Admin
        const adminLoginForm = document.getElementById('adminLoginForm');
        if (adminLoginForm) {
            adminLoginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAdminLogin();
            });
        }
        
        const adminLogoutBtn = document.getElementById('adminLogoutBtn');
        if (adminLogoutBtn) adminLogoutBtn.addEventListener('click', () => this.handleAdminLogout());
        
        const refreshDataBtn = document.getElementById('refreshDataBtn');
        if (refreshDataBtn) refreshDataBtn.addEventListener('click', () => this.loadEmployeeData());

        // Admin tabs
        const discResultsTab = document.getElementById('discResultsTab');
        const pauliResultsTab = document.getElementById('pauliResultsTab');
        const combinedAnalysisTab = document.getElementById('combinedAnalysisTab');
        
        if (discResultsTab) discResultsTab.addEventListener('click', () => this.showAdminTab('discResults'));
        if (pauliResultsTab) pauliResultsTab.addEventListener('click', () => this.showAdminTab('pauliResults'));
        if (combinedAnalysisTab) combinedAnalysisTab.addEventListener('click', () => this.showAdminTab('combinedAnalysis'));
        
        // Refresh buttons
        const refreshDiscBtn = document.getElementById('refreshDiscBtn');
        const refreshPauliBtn = document.getElementById('refreshPauliBtn');
        const refreshCombinedBtn = document.getElementById('refreshCombinedBtn');
        
        if (refreshDiscBtn) refreshDiscBtn.addEventListener('click', () => this.loadEmployeeData());
        if (refreshPauliBtn) refreshPauliBtn.addEventListener('click', () => this.loadEmployeeData());
        if (refreshCombinedBtn) refreshCombinedBtn.addEventListener('click', () => this.loadEmployeeData());

        // Employee detail modal
        const closeEmployeeModal = document.getElementById('closeEmployeeModal');
        if (closeEmployeeModal) {
            closeEmployeeModal.addEventListener('click', () => {
                this.closeEmployeeModal();
            });
        }

        // Validation modal
        document.getElementById('closeValidationModal').addEventListener('click', () => {
            document.getElementById('validationModal').classList.add('hidden');
        });

        // Restart test
        document.getElementById('restartTestBtn').addEventListener('click', () => this.restartTest());
    }

    setupFormValidation() {
        const today = new Date();
        const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
        const maxDate = new Date(today.getFullYear() - 15, today.getMonth(), today.getDate());
        
        document.getElementById('tanggalLahir').min = minDate.toISOString().split('T')[0];
        document.getElementById('tanggalLahir').max = maxDate.toISOString().split('T')[0];
    }

    checkExistingSession() {
        const existingSession = sessionStorage.getItem('psychologyTestSession');
        if (existingSession) {
            try {
                const session = JSON.parse(existingSession);
                this.sessionId = session.sessionId;
                this.currentEmployee = session.employee;
                this.currentTestPhase = session.phase || 'biodata';
                
                if (this.currentEmployee && this.currentTestPhase !== 'biodata') {
                    this.resumeTest();
                }
            } catch (error) {
                console.error('Error loading existing session:', error);
                sessionStorage.removeItem('psychologyTestSession');
            }
        }
    }

    resumeTest() {
        document.getElementById('participantInfo').classList.remove('hidden');
        document.getElementById('participantName').textContent = this.currentEmployee.nama_lengkap;
        
        if (this.currentTestPhase === 'disc') {
            this.showDiscSection();
        } else if (this.currentTestPhase === 'kraepelin') {
            this.showKraepelinSection();
        }
    }

    // ===== VIEW MANAGEMENT =====
    showStudentView() {
        this.currentView = 'student';
        document.getElementById('tabBiodata').classList.add('active');
        document.getElementById('tabAdmin').classList.remove('active');
        document.getElementById('studentContent').classList.remove('hidden');
        document.getElementById('adminContent').classList.add('hidden');
    }

    showAdminView() {
        this.currentView = 'admin';
        document.getElementById('tabBiodata').classList.remove('active');
        document.getElementById('tabAdmin').classList.add('active');
        document.getElementById('studentContent').classList.add('hidden');
        document.getElementById('adminContent').classList.remove('hidden');
        
        if (this.isAdminLoggedIn) {
            this.showAdminDashboard();
        } else {
            this.showAdminLogin();
        }
    }

    showAdminLogin() {
        document.getElementById('adminLogin').classList.remove('hidden');
        document.getElementById('adminDashboard').classList.add('hidden');
    }

    showAdminDashboard() {
        document.getElementById('adminLogin').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        this.loadEmployeeData();
    }

    showAdminTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(tabName + 'Tab').classList.add('active');

        // Show corresponding view
        document.querySelectorAll('.admin-view').forEach(view => {
            view.classList.add('hidden');
        });
        document.getElementById(tabName + 'View').classList.remove('hidden');

        // Load specific data if needed
        if (tabName === 'discResults') {
            this.loadDiscResults();
        } else if (tabName === 'pauliResults') {
            this.loadPauliResults();
        } else if (tabName === 'combinedAnalysis') {
            this.loadCombinedAnalysis();
        }
    }

    // ===== BIODATA HANDLING =====
    handlePositionChange(selectedValue) {
        const customPositionDiv = document.getElementById('customPosition');
        const customPositionInput = document.getElementById('posisiCustom');

        if (selectedValue === 'Other') {
            customPositionDiv.classList.remove('hidden');
            customPositionInput.required = true;
        } else {
            customPositionDiv.classList.add('hidden');
            customPositionInput.required = false;
            customPositionInput.value = '';
        }
    }

    async handleBiodataSubmit() {
        try {
            this.showLoading(true, 'Menyimpan data...');
            
            const formData = this.getBiodataFormData();
            
            if (!this.validateBiodataForm(formData)) {
                this.showLoading(false);
                return;
            }

            const age = this.calculateAge(formData.tanggalLahir);
            this.sessionId = this.generateSessionId();
            
            const employeeData = {
                nama_lengkap: formData.namaLengkap,
                tanggal_lahir: new Date(formData.tanggalLahir).getTime(),
                usia: age,
                posisi: formData.posisi === 'Other' ? formData.posisiCustom : formData.posisi,
                tanggal_tes: Date.now(),
                waktu_mulai: Date.now(),
                status: 'disc',
                session_id: this.sessionId
            };

            const response = await fetch('tables/employees', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(employeeData)
            });

            if (!response.ok) {
                throw new Error('Gagal menyimpan data');
            }

            this.currentEmployee = await response.json();
            this.currentTestPhase = 'disc';
            
            this.saveSession();
            
            document.getElementById('participantInfo').classList.remove('hidden');
            document.getElementById('participantName').textContent = this.currentEmployee.nama_lengkap;
            
            this.showLoading(false);
            this.showDiscSection();

        } catch (error) {
            console.error('Error saving biodata:', error);
            this.showLoading(false);
            this.showError('Terjadi kesalahan saat menyimpan data. Silakan coba lagi.');
        }
    }

    getBiodataFormData() {
        return {
            namaLengkap: document.getElementById('namaLengkap').value.trim(),
            tanggalLahir: document.getElementById('tanggalLahir').value,
            posisi: document.getElementById('posisi').value,
            posisiCustom: document.getElementById('posisiCustom').value.trim()
        };
    }

    validateBiodataForm(data) {
        if (!data.namaLengkap) {
            this.showError('Nama lengkap harus diisi');
            return false;
        }

        if (!data.tanggalLahir) {
            this.showError('Tanggal lahir harus diisi');
            return false;
        }

        if (!data.posisi) {
            this.showError('Posisi/jabatan harus dipilih');
            return false;
        }

        if (data.posisi === 'Other' && !data.posisiCustom) {
            this.showError('Silakan isi manual posisi Anda');
            return false;
        }

        const age = this.calculateAge(data.tanggalLahir);
        if (age < 15 || age > 100) {
            this.showError('Usia harus antara 15-100 tahun');
            return false;
        }

        if (data.namaLengkap.length < 2) {
            this.showError('Nama lengkap minimal 2 karakter');
            return false;
        }

        const nameRegex = /^[a-zA-Z\s.'-]+$/;
        if (!nameRegex.test(data.namaLengkap)) {
            this.showError('Nama hanya boleh mengandung huruf, spasi, titik, tanda kutip, dan tanda hubung');
            return false;
        }

        return true;
    }

    calculateAge(birthDate) {
        const birth = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }

    generateSessionId() {
        const timestamp = Date.now().toString();
        const random = Math.random().toString(36).substring(2);
        return `TEST_${timestamp}_${random}`;
    }

    saveSession() {
        const session = {
            sessionId: this.sessionId,
            employee: this.currentEmployee,
            phase: this.currentTestPhase
        };
        sessionStorage.setItem('psychologyTestSession', JSON.stringify(session));
    }

    // ===== DISC TEST IMPLEMENTATION =====
    showDiscSection() {
        document.getElementById('welcomeSection').classList.add('hidden');
        document.getElementById('kraepelinSection').classList.add('hidden');
        document.getElementById('completionSection').classList.add('hidden');
        
        document.getElementById('discSection').classList.remove('hidden');
        document.getElementById('progressSection').classList.remove('hidden');
        
        document.getElementById('progressLabel').textContent = 'Progress Tes DISC';
        
        document.getElementById('discInstructions').classList.remove('hidden');
        document.getElementById('discTestContent').classList.add('hidden');
        document.getElementById('discSummary').classList.add('hidden');
    }

    startDiscTest() {
        document.getElementById('discInstructions').classList.add('hidden');
        document.getElementById('discTestContent').classList.remove('hidden');
        
        this.discCurrentQuestion = 0;
        this.discAnswers = {};
        this.displayDiscQuestion();
    }

    displayDiscQuestion() {
        const question = this.discQuestions[this.discCurrentQuestion];
        
        document.getElementById('currentQuestionNumber').textContent = this.discCurrentQuestion + 1;
        document.getElementById('questionText').textContent = question.text;

        const progress = ((this.discCurrentQuestion + 1) / 24) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `${this.discCurrentQuestion + 1} / 24`;

        this.displayDiscColumns(question.options);
        this.updateDiscNavigation();
        this.displayDiscSelections();
    }

    displayDiscColumns(options) {
        const leastContainer = document.getElementById('leastOptions');
        const mostContainer = document.getElementById('mostOptions');
        
        leastContainer.innerHTML = '';
        mostContainer.innerHTML = '';

        options.forEach((option) => {
            // Left column (Least)
            const leastButton = document.createElement('button');
            leastButton.className = 'disc-option w-full p-3 border-2 border-red-300 rounded-lg text-left hover:border-red-400 transition-all duration-200 bg-white';
            leastButton.setAttribute('data-option', option.text);
            leastButton.setAttribute('data-dimension', option.dimension);
            leastButton.innerHTML = `<div class="font-medium text-gray-800">${option.text}</div>`;
            
            leastButton.addEventListener('click', () => {
                this.handleDiscSelection('least', option.text, option.dimension);
            });

            leastContainer.appendChild(leastButton);

            // Right column (Most)
            const mostButton = document.createElement('button');
            mostButton.className = 'disc-option w-full p-3 border-2 border-green-300 rounded-lg text-left hover:border-green-400 transition-all duration-200 bg-white';
            mostButton.setAttribute('data-option', option.text);
            mostButton.setAttribute('data-dimension', option.dimension);
            mostButton.innerHTML = `<div class="font-medium text-gray-800">${option.text}</div>`;
            
            mostButton.addEventListener('click', () => {
                this.handleDiscSelection('most', option.text, option.dimension);
            });

            mostContainer.appendChild(mostButton);
        });

        this.updateDiscColumnButtons();
    }

    handleDiscSelection(type, optionText, dimension) {
        const questionId = this.discCurrentQuestion + 1;
        let currentAnswer = this.discAnswers[questionId] || {};

        // Check if same option selected for both
        if (type === 'most' && currentAnswer.least === optionText) {
            this.showValidationError();
            return;
        }
        if (type === 'least' && currentAnswer.most === optionText) {
            this.showValidationError();
            return;
        }

        // Update selection
        if (type === 'most') {
            currentAnswer.most = optionText;
            currentAnswer.mostDimension = dimension;
        } else {
            currentAnswer.least = optionText;
            currentAnswer.leastDimension = dimension;
        }

        this.discAnswers[questionId] = currentAnswer;
        
        this.updateDiscColumnButtons();
        this.displayDiscSelections();
        this.updateDiscNavigation();

        // Auto-continue if both selected
        if (currentAnswer.most && currentAnswer.least && currentAnswer.most !== currentAnswer.least) {
            setTimeout(() => {
                this.autoAdvanceDisc();
            }, 500);
        }
    }

    showValidationError() {
        document.getElementById('validationModal').classList.remove('hidden');
    }

    autoAdvanceDisc() {
        if (this.discCurrentQuestion === 23) {
            // Last question, show summary
            this.showDiscSummary();
        } else {
            this.discCurrentQuestion++;
            this.displayDiscQuestion();
        }
    }

    updateDiscColumnButtons() {
        const questionId = this.discCurrentQuestion + 1;
        const currentAnswer = this.discAnswers[questionId] || {};
        
        // Update least options
        document.querySelectorAll('#leastOptions .disc-option').forEach(button => {
            const optionText = button.getAttribute('data-option');
            button.classList.remove('selected-least');
            
            if (currentAnswer.least === optionText) {
                button.classList.add('selected-least');
            }
        });

        // Update most options
        document.querySelectorAll('#mostOptions .disc-option').forEach(button => {
            const optionText = button.getAttribute('data-option');
            button.classList.remove('selected-most');
            
            if (currentAnswer.most === optionText) {
                button.classList.add('selected-most');
            }
        });
    }

    displayDiscSelections() {
        const questionId = this.discCurrentQuestion + 1;
        const currentAnswer = this.discAnswers[questionId] || {};
        
        document.getElementById('mostSelection').textContent = currentAnswer.most || 'Belum dipilih';
        document.getElementById('leastSelection').textContent = currentAnswer.least || 'Belum dipilih';
    }

    updateDiscNavigation() {
        const prevBtn = document.getElementById('discPrevBtn');
        prevBtn.disabled = this.discCurrentQuestion === 0;
    }

    discPreviousQuestion() {
        if (this.discCurrentQuestion > 0) {
            this.discCurrentQuestion--;
            this.displayDiscQuestion();
        }
    }

    showDiscSummary() {
        document.getElementById('discTestContent').classList.add('hidden');
        document.getElementById('discSummary').classList.remove('hidden');

        const summaryList = document.getElementById('discSummaryList');
        summaryList.innerHTML = '';

        Object.entries(this.discAnswers).forEach(([questionNumber, answer]) => {
            const questionText = this.discQuestions[parseInt(questionNumber) - 1].text;
            
            const summaryItem = document.createElement('div');
            summaryItem.className = 'bg-gray-50 p-4 rounded-lg border';
            summaryItem.innerHTML = `
                <h4 class="font-medium text-gray-800 mb-2">Pertanyaan ${questionNumber}: ${questionText}</h4>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div class="bg-red-100 p-2 rounded">
                        <span class="text-red-700 font-medium">Paling TIDAK Sesuai:</span>
                        <br><span class="text-red-800">${answer.least}</span>
                    </div>
                    <div class="bg-green-100 p-2 rounded">
                        <span class="text-green-700 font-medium">Paling Sesuai:</span>
                        <br><span class="text-green-800">${answer.most}</span>
                    </div>
                </div>
            `;
            summaryList.appendChild(summaryItem);
        });
    }

    editDiscAnswers() {
        // Go back to first question for editing
        this.discCurrentQuestion = 0;
        document.getElementById('discSummary').classList.add('hidden');
        document.getElementById('discTestContent').classList.remove('hidden');
        this.displayDiscQuestion();
    }

    async submitDiscTest() {
        try {
            this.showLoading(true, 'Menganalisis hasil DISC...');
            
            // Save all answers to database
            for (const [questionNumber, answer] of Object.entries(this.discAnswers)) {
                await this.saveDiscAnswer(parseInt(questionNumber), answer);
            }
            
            // Calculate and save DISC scores
            await this.calculateAndSaveDiscScores();
            
            // Update employee status
            await this.updateEmployeeStatus('kraepelin');
            
            this.currentTestPhase = 'kraepelin';
            this.saveSession();
            
            this.showLoading(false);
            this.showKraepelinSection();
            
        } catch (error) {
            console.error('Error submitting DISC test:', error);
            this.showLoading(false);
            this.showError('Terjadi kesalahan saat menyimpan hasil DISC. Silakan coba lagi.');
        }
    }

    async saveDiscAnswer(questionNumber, answer) {
        const answerData = {
            employee_id: this.currentEmployee.id,
            question_number: questionNumber,
            most_answer: answer.most,
            least_answer: answer.least,
            dimension_most: answer.mostDimension,
            dimension_least: answer.leastDimension
        };

        const response = await fetch('tables/disc_answers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(answerData)
        });

        if (!response.ok) {
            throw new Error('Failed to save DISC answer');
        }
    }

    async calculateAndSaveDiscScores() {
        const scores = { D: 0, I: 0, S: 0, C: 0 };

        Object.values(this.discAnswers).forEach(answer => {
            if (answer.mostDimension) {
                scores[answer.mostDimension] += 1;
            }
            if (answer.leastDimension) {
                scores[answer.leastDimension] -= 1;
            }
        });

        const dominantProfile = this.getDominantProfile(scores);
        const analysis = this.generateDiscAnalysis(scores, dominantProfile);

        const scoreData = {
            employee_id: this.currentEmployee.id,
            skor_d: scores.D,
            skor_i: scores.I,
            skor_s: scores.S,
            skor_c: scores.C,
            profil_dominan: dominantProfile.type,
            analisis: analysis.description,
            kekuatan: analysis.strengths,
            area_pengembangan: analysis.development,
            saran_pekerjaan: analysis.jobRecommendations
        };

        const response = await fetch('tables/disc_scores', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(scoreData)
        });

        if (!response.ok) {
            throw new Error('Failed to save DISC scores');
        }
    }

    getDominantProfile(scores) {
        const sortedScores = Object.entries(scores).sort(([,a], [,b]) => b - a);
        const highest = sortedScores[0];
        const second = sortedScores[1];
        
        if (Math.abs(highest[1] - second[1]) <= 2) {
            return {
                type: `${highest[0]}${second[0]}`,
                primary: highest[0],
                secondary: second[0]
            };
        } else {
            return {
                type: highest[0],
                primary: highest[0],
                secondary: null
            };
        }
    }

    generateDiscAnalysis(scores, profile) {
        const analyses = {
            'D': {
                description: 'Peserta memiliki kepribadian dominan yang kuat. Cenderung tegas, suka tantangan, berorientasi hasil, dan cepat dalam mengambil keputusan.',
                strengths: 'Kepemimpinan alami, berani mengambil risiko, orientasi hasil yang tinggi, kemampuan mengambil keputusan cepat.',
                development: 'Perlu mengembangkan kesabaran, mendengarkan pendapat orang lain, dan meningkatkan empati terhadap tim.',
                jobRecommendations: 'Cocok untuk posisi manajemen, kepemimpinan, entrepreneur, atau posisi yang membutuhkan pengambilan keputusan cepat.'
            },
            'I': {
                description: 'Peserta memiliki kepribadian yang sangat komunikatif dan ekspresif. Mudah bergaul, optimis, antusias, dan mampu mempengaruhi orang lain.',
                strengths: 'Komunikasi yang excellent, kemampuan persuasi tinggi, optimisme, kreativitas, mudah beradaptasi dengan perubahan.',
                development: 'Perlu meningkatkan fokus pada detail, konsistensi dalam follow-up, dan manajemen waktu yang lebih baik.',
                jobRecommendations: 'Cocok untuk posisi sales, marketing, public relations, customer service, atau trainer.'
            },
            'S': {
                description: 'Peserta memiliki kepribadian yang stabil, setia, dan reliable. Cenderung sabar, penolong, konsisten, dan menyukai lingkungan kerja yang harmonis.',
                strengths: 'Kesetiaan tinggi, kemampuan bekerja sama yang baik, konsistensi, kesabaran, dapat diandalkan.',
                development: 'Perlu mengembangkan keberanian menghadapi perubahan, assertiveness, dan inisiatif pribadi.',
                jobRecommendations: 'Cocok untuk posisi support, customer service, human resources, atau administrasi.'
            },
            'C': {
                description: 'Peserta memiliki kepribadian yang sangat teliti, analitis, dan sistematis. Cenderung perfeksionis, mengutamakan akurasi, dan mengikuti prosedur dengan baik.',
                strengths: 'Ketelitian tinggi, kemampuan analisis yang baik, sistematis, mengikuti standar kualitas, disiplin yang baik.',
                development: 'Perlu mengembangkan fleksibilitas, kecepatan dalam pengambilan keputusan, dan komunikasi yang lebih asertif.',
                jobRecommendations: 'Cocok untuk posisi quality control, finance, accounting, research, atau IT.'
            }
        };

        return analyses[profile.primary] || analyses['D'];
    }

    // ===== KRAEPELIN TEST IMPLEMENTATION =====
    showKraepelinSection() {
        document.getElementById('welcomeSection').classList.add('hidden');
        document.getElementById('discSection').classList.add('hidden');
        document.getElementById('completionSection').classList.add('hidden');
        
        document.getElementById('kraepelinSection').classList.remove('hidden');
        document.getElementById('progressSection').classList.add('hidden');
        document.getElementById('timerSection').classList.remove('hidden');
        
        document.getElementById('kraepelinInstructions').classList.remove('hidden');
        document.getElementById('kraepelinTestContent').classList.add('hidden');
        
        this.generateKraepelinNumbers();
    }

    generateKraepelinNumbers() {
        this.numbersGrid = [];
        this.kraepelinCorrectAnswers = {};

        for (let row = 0; row < 50; row++) {
            const rowNumbers = [];
            for (let col = 0; col < 50; col++) {
                rowNumbers.push(Math.floor(Math.random() * 10));
            }
            this.numbersGrid.push(rowNumbers);

            for (let col = 0; col < 49; col++) {
                const sum = rowNumbers[col] + rowNumbers[col + 1];
                const answerId = `${row}-${col}`;
                this.kraepelinCorrectAnswers[answerId] = sum % 10;
            }
        }
    }

    startKraepelinTest() {
        document.getElementById('kraepelinInstructions').classList.add('hidden');
        document.getElementById('kraepelinTestContent').classList.remove('hidden');
        
        this.displayKraepelinNumbers();
        this.startKraepelinTimer();
        
        setTimeout(() => {
            const firstInput = document.querySelector('.answer-input');
            if (firstInput) {
                firstInput.focus();
            }
        }, 500);
    }

    displayKraepelinNumbers() {
        const container = document.getElementById('numbersContainer');
        container.innerHTML = '';

        for (let row = 0; row < 50; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'number-row';
            rowDiv.innerHTML = `<div class="text-xs text-gray-500 w-8">${row + 1}</div>`;

            const numbersDiv = document.createElement('div');
            numbersDiv.className = 'flex items-center space-x-1';

            for (let col = 0; col < 50; col++) {
                const numberSpan = document.createElement('span');
                numberSpan.className = 'w-6 text-center font-mono text-lg';
                numberSpan.textContent = this.numbersGrid[row][col];
                numbersDiv.appendChild(numberSpan);

                if (col < 49) {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.className = 'answer-input';
                    input.maxLength = 1;
                    input.id = `answer-${row}-${col}`;
                    input.setAttribute('data-row', row);
                    input.setAttribute('data-col', col);
                    
                    input.addEventListener('input', (e) => {
                        this.handleKraepelinInput(e);
                    });

                    input.addEventListener('keydown', (e) => {
                        if (e.key === 'Tab' || e.key === 'Enter') {
                            e.preventDefault();
                            this.moveToNextKraepelinInput(input);
                        }
                    });

                    numbersDiv.appendChild(input);
                }
            }

            rowDiv.appendChild(numbersDiv);
            container.appendChild(rowDiv);
        }
    }

    handleKraepelinInput(e) {
        const input = e.target;
        const value = input.value;

        if (!/^[0-9]$/.test(value)) {
            input.value = '';
            return;
        }

        const row = parseInt(input.getAttribute('data-row'));
        const col = parseInt(input.getAttribute('data-col'));
        const answerId = `${row}-${col}`;

        this.kraepelinAnswers[answerId] = parseInt(value);

        const isCorrect = this.kraepelinAnswers[answerId] === this.kraepelinCorrectAnswers[answerId];
        
        input.classList.remove('correct', 'incorrect');
        if (isCorrect) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
        }

        this.updateKraepelinCounter();

        setTimeout(() => {
            this.moveToNextKraepelinInput(input);
        }, 100);
    }

    moveToNextKraepelinInput(currentInput) {
        const inputs = document.querySelectorAll('.answer-input');
        const currentIndex = Array.from(inputs).indexOf(currentInput);
        
        if (currentIndex >= 0 && currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        }
    }

    updateKraepelinCounter() {
        const answeredCount = Object.keys(this.kraepelinAnswers).length;
        document.getElementById('answeredCount').textContent = answeredCount;
    }

    startKraepelinTimer() {
        this.kraepelinStartTime = Date.now();
        this.kraepelinTimeRemaining = 600;

        this.kraepelinTimer = setInterval(() => {
            this.kraepelinTimeRemaining--;
            
            const minutes = Math.floor(this.kraepelinTimeRemaining / 60);
            const seconds = this.kraepelinTimeRemaining % 60;
            const timerDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            document.getElementById('timer').textContent = timerDisplay;
            
            const progress = (600 - this.kraepelinTimeRemaining) / 600 * 100;
            document.getElementById('timeProgress').style.width = `${100 - progress}%`;
            
            const timerElement = document.getElementById('timer');
            if (this.kraepelinTimeRemaining <= 60) {
                timerElement.className = 'text-3xl font-bold text-red-600 font-mono timer-alert';
            } else if (this.kraepelinTimeRemaining <= 300) {
                timerElement.className = 'text-3xl font-bold text-yellow-600 font-mono';
            }
            
            if (this.kraepelinTimeRemaining <= 0) {
                this.endKraepelinTest();
            }
        }, 1000);
    }

    async endKraepelinTest() {
        if (this.kraepelinTimer) {
            clearInterval(this.kraepelinTimer);
        }

        try {
            this.showLoading(true, 'Menganalisis hasil Kraepelin...');
            
            const results = this.calculateKraepelinResults();
            await this.saveKraepelinResults(results);
            await this.updateEmployeeStatus('completed');
            
            this.currentTestPhase = 'completed';
            this.saveSession();
            
            this.showLoading(false);
            this.showCompletionSection(results);
            
        } catch (error) {
            console.error('Error ending Kraepelin test:', error);
            this.showLoading(false);
            this.showError('Terjadi kesalahan saat menyimpan hasil. Hasil telah tersimpan sementara.');
        }
    }

    calculateKraepelinResults() {
        const totalAnswered = Object.keys(this.kraepelinAnswers).length;
        let correctCount = 0;

        Object.entries(this.kraepelinAnswers).forEach(([answerId, answer]) => {
            if (answer === this.kraepelinCorrectAnswers[answerId]) {
                correctCount++;
            }
        });

        const wrongCount = totalAnswered - correctCount;
        const accuracy = totalAnswered > 0 ? (correctCount / totalAnswered * 100) : 0;
        const testDurationMinutes = (Date.now() - this.kraepelinStartTime) / (1000 * 60);
        const speedPerMinute = totalAnswered / testDurationMinutes;

        let productivity = 'Rendah';
        let stamina = 'Perlu Ditingkatkan';
        let ketelitian = 'Perlu Ditingkatkan';
        let konsistensi = 'Cukup';

        if (totalAnswered >= 400) productivity = 'Sangat Tinggi';
        else if (totalAnswered >= 300) productivity = 'Tinggi';
        else if (totalAnswered >= 200) productivity = 'Sedang';

        if (accuracy >= 90) ketelitian = 'Sangat Baik';
        else if (accuracy >= 80) ketelitian = 'Baik';
        else if (accuracy >= 70) ketelitian = 'Cukup';

        const analysis = `Peserta menunjukkan produktivitas ${productivity.toLowerCase()} dengan tingkat ketelitian ${ketelitian.toLowerCase()}. Total ${totalAnswered} soal dikerjakan dengan akurasi ${accuracy.toFixed(1)}%.`;

        return {
            total_dikerjakan: totalAnswered,
            jawaban_benar: correctCount,
            jawaban_salah: wrongCount,
            akurasi_persen: parseFloat(accuracy.toFixed(1)),
            kecepatan_per_menit: parseFloat(speedPerMinute.toFixed(1)),
            konsistensi: konsistensi,
            analisis: analysis,
            produktivitas: productivity,
            stamina: stamina,
            ketelitian: ketelitian,
            raw_answers: JSON.stringify({
                answers: this.kraepelinAnswers,
                correctAnswers: this.kraepelinCorrectAnswers,
                startTime: this.kraepelinStartTime,
                endTime: Date.now()
            })
        };
    }

    async saveKraepelinResults(results) {
        const response = await fetch('tables/pauli_results', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                employee_id: this.currentEmployee.id,
                ...results
            })
        });

        if (!response.ok) {
            throw new Error('Failed to save Kraepelin results');
        }
    }

    async updateEmployeeStatus(status) {
        const updateData = { status: status };
        if (status === 'completed') {
            updateData.waktu_selesai = Date.now();
        }

        const response = await fetch(`tables/employees/${this.currentEmployee.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        });

        if (!response.ok) {
            throw new Error('Failed to update employee status');
        }
    }

    // ===== COMPLETION SECTION =====
    showCompletionSection(results = null) {
        document.getElementById('welcomeSection').classList.add('hidden');
        document.getElementById('discSection').classList.add('hidden');
        document.getElementById('kraepelinSection').classList.add('hidden');
        document.getElementById('progressSection').classList.add('hidden');
        document.getElementById('timerSection').classList.add('hidden');
        
        document.getElementById('completionSection').classList.remove('hidden');

        if (results) {
            document.getElementById('completionMessage').textContent = 'Terima kasih telah menyelesaikan kedua tes psikologi';
            document.getElementById('testResults').innerHTML = `
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <div class="text-2xl font-bold text-blue-600">${results.total_dikerjakan}</div>
                        <div class="text-sm text-gray-600">Total Dikerjakan</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-green-600">${results.jawaban_benar}</div>
                        <div class="text-sm text-gray-600">Benar</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-red-600">${results.jawaban_salah}</div>
                        <div class="text-sm text-gray-600">Salah</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-purple-600">${results.akurasi_persen}%</div>
                        <div class="text-sm text-gray-600">Akurasi</div>
                    </div>
                </div>
            `;
        }
    }

    restartTest() {
        sessionStorage.removeItem('psychologyTestSession');
        
        this.currentEmployee = null;
        this.sessionId = null;
        this.currentTestPhase = 'biodata';
        this.discCurrentQuestion = 0;
        this.discAnswers = {};
        this.kraepelinAnswers = {};
        
        document.getElementById('participantInfo').classList.add('hidden');
        document.getElementById('biodataForm').reset();
        
        this.showStudentView();
        document.getElementById('welcomeSection').classList.remove('hidden');
        document.getElementById('discSection').classList.add('hidden');
        document.getElementById('kraepelinSection').classList.add('hidden');
        document.getElementById('completionSection').classList.add('hidden');
        document.getElementById('progressSection').classList.add('hidden');
        document.getElementById('timerSection').classList.add('hidden');
    }

    // ===== ADMIN FUNCTIONS =====
    async handleAdminLogin() {
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;

        if (username === 'admin' && password === 'Alpro123!') {
            this.isAdminLoggedIn = true;
            this.showAdminDashboard();
        } else {
            this.showError('Username atau password salah!');
        }
    }

    handleAdminLogout() {
        this.isAdminLoggedIn = false;
        this.showAdminLogin();
        document.getElementById('adminLoginForm').reset();
    }

    async loadEmployeeData() {
        try {
            this.showLoading(true, 'Loading data...');
            
            const employeesResponse = await fetch('tables/employees?limit=1000');
            if (employeesResponse.ok) {
                const employeesData = await employeesResponse.json();
                this.employees = employeesData.data || [];
            }

            const discResponse = await fetch('tables/disc_scores?limit=1000');
            if (discResponse.ok) {
                const discData = await discResponse.json();
                this.discScores = discData.data || [];
            }

            const pauliResponse = await fetch('tables/pauli_results?limit=1000');
            if (pauliResponse.ok) {
                const pauliData = await pauliResponse.json();
                this.pauliResults = pauliData.data || [];
            }

            // Refresh current view
            const activeTab = document.querySelector('.admin-tab.active');
            if (activeTab) {
                const tabId = activeTab.id.replace('Tab', '');
                if (tabId === 'discResults') {
                    this.loadDiscResults();
                } else if (tabId === 'pauliResults') {
                    this.loadPauliResults();
                } else if (tabId === 'combinedAnalysis') {
                    this.loadCombinedAnalysis();
                }
            }
            
        } catch (error) {
            console.error('Error loading employee data:', error);
            this.showError('Gagal memuat data. Silakan coba lagi.');
        } finally {
            this.showLoading(false);
        }
    }

    loadDiscResults() {
        const tbody = document.getElementById('discResultsTableBody');
        tbody.innerHTML = '';

        if (this.discScores.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7" class="px-6 py-8 text-center text-gray-500">
                        <div class="flex flex-col items-center">
                            <div class="text-4xl mb-2">📊</div>
                            <p>Belum ada hasil DISC. Tunggu peserta menyelesaikan tes.</p>
                        </div>
                    </td>
                </tr>
            `;
            return;
        }

        this.discScores.forEach(score => {
            const employee = this.employees.find(emp => emp.id === score.employee_id);
            if (!employee) return;

            const testDate = new Date(employee.tanggal_tes).toLocaleDateString('id-ID', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });

            const row = document.createElement('tr');
            row.className = 'hover:bg-gray-50 cursor-pointer';
            row.addEventListener('click', () => this.showEmployeeDetail(employee.id, 'disc'));
            
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-blue-600 hover:text-blue-800">${employee.nama_lengkap}</div>
                    <div class="text-sm text-gray-500">${employee.posisi}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${testDate}</td>
                <td class="px-6 py-4 text-center text-sm font-bold text-red-600">${score.skor_d}</td>
                <td class="px-6 py-4 text-center text-sm font-bold text-yellow-600">${score.skor_i}</td>
                <td class="px-6 py-4 text-center text-sm font-bold text-green-600">${score.skor_s}</td>
                <td class="px-6 py-4 text-center text-sm font-bold text-blue-600">${score.skor_c}</td>
                <td class="px-6 py-4 text-sm text-gray-900">${score.profil_dominan}</td>
            `;
            tbody.appendChild(row);
        });
    }

    loadPauliResults() {
        const tbody = document.getElementById('pauliResultsTableBody');
        tbody.innerHTML = '';

        if (this.pauliResults.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="px-6 py-8 text-center text-gray-500">
                        <div class="flex flex-col items-center">
                            <div class="text-4xl mb-2">📈</div>
                            <p>Belum ada hasil Pauli. Tunggu peserta menyelesaikan tes.</p>
                        </div>
                    </td>
                </tr>
            `;
            return;
        }

        this.pauliResults.forEach(result => {
            const employee = this.employees.find(emp => emp.id === result.employee_id);
            if (!employee) return;

            const testDate = new Date(employee.tanggal_tes).toLocaleDateString('id-ID', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });

            const speedIcon = result.kecepatan_per_menit > 30 ? '🔺' : result.kecepatan_per_menit > 20 ? '➡️' : '🔻';
            
            // Determine if early submission
            let rawData = {};
            try {
                rawData = JSON.parse(result.raw_answers || '{}');
            } catch (e) {
                rawData = {};
            }
            
            const testDuration = rawData.endTime && rawData.startTime ? 
                (rawData.endTime - rawData.startTime) / (1000 * 60) : 10;
            
            const concentrationTrend = testDuration < 9 ? 
                `${result.konsistensi}, Early end (${Math.round(testDuration)} min)` : 
                result.konsistensi;

            const row = document.createElement('tr');
            row.className = 'hover:bg-gray-50 cursor-pointer';
            row.addEventListener('click', () => this.showEmployeeDetail(employee.id, 'pauli'));
            
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-blue-600 hover:text-blue-800">${employee.nama_lengkap}</div>
                    <div class="text-sm text-gray-500">${employee.posisi}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${testDate}</td>
                <td class="px-6 py-4 text-center text-sm font-bold text-green-600">${result.jawaban_benar}</td>
                <td class="px-6 py-4 text-center text-sm font-bold text-red-600">${result.jawaban_salah}</td>
                <td class="px-6 py-4 text-center text-lg">${speedIcon}</td>
                <td class="px-6 py-4 text-sm text-gray-900">${concentrationTrend}</td>
            `;
            tbody.appendChild(row);
        });
    }

    loadCombinedAnalysis() {
        const tbody = document.getElementById('combinedAnalysisTableBody');
        tbody.innerHTML = '';

        // Find employees who have completed both tests
        const completedEmployees = this.employees.filter(emp => {
            const hasDisc = this.discScores.some(disc => disc.employee_id === emp.id);
            const hasPauli = this.pauliResults.some(pauli => pauli.employee_id === emp.id);
            return hasDisc && hasPauli;
        });

        if (completedEmployees.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" class="px-6 py-8 text-center text-gray-500">
                        <div class="flex flex-col items-center">
                            <div class="text-4xl mb-2">🔄</div>
                            <p>Belum ada analisis gabungan. Tunggu peserta menyelesaikan kedua tes.</p>
                        </div>
                    </td>
                </tr>
            `;
            return;
        }

        completedEmployees.forEach(employee => {
            const discScore = this.discScores.find(disc => disc.employee_id === employee.id);
            const pauliResult = this.pauliResults.find(pauli => pauli.employee_id === employee.id);
            
            const testDate = new Date(employee.tanggal_tes).toLocaleDateString('id-ID', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });

            const discSummary = discScore ? discScore.profil_dominan : 'N/A';
            const pauliSummary = pauliResult ? 
                `${pauliResult.produktivitas}, ${pauliResult.akurasi_persen}% akurasi` : 'N/A';
            
            const combinedFit = this.generateCombinedFit(discScore, pauliResult);

            const row = document.createElement('tr');
            row.className = 'hover:bg-gray-50 cursor-pointer';
            row.addEventListener('click', () => this.showEmployeeDetail(employee.id, 'combined'));
            
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-blue-600 hover:text-blue-800">${employee.nama_lengkap}</div>
                    <div class="text-sm text-gray-500">${employee.posisi}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${testDate}</td>
                <td class="px-6 py-4 text-sm text-gray-900">${discSummary}</td>
                <td class="px-6 py-4 text-sm text-gray-900">${pauliSummary}</td>
                <td class="px-6 py-4 text-sm text-gray-900">${combinedFit}</td>
            `;
            tbody.appendChild(row);
        });
    }

    generateCombinedFit(discScore, pauliResult) {
        if (!discScore || !pauliResult) return 'Incomplete Data';

        const discType = discScore.profil_dominan.charAt(0); // First letter
        const pauliAccuracy = pauliResult.akurasi_persen;
        const pauliProductivity = pauliResult.produktivitas;

        // Generate job fit based on DISC + Pauli combination
        if (discType === 'C' && pauliAccuracy >= 85) {
            return 'Excellent for Quality/Regulatory roles';
        } else if (discType === 'D' && pauliProductivity === 'Tinggi') {
            return 'Strong Leadership potential';
        } else if (discType === 'I' && pauliResult.konsistensi === 'Konsisten') {
            return 'Good for Sales/Customer roles';
        } else if (discType === 'S' && pauliResult.konsistensi === 'Sangat Konsisten') {
            return 'Ideal for Support/Admin roles';
        } else {
            return 'Good team member with balanced skills';
        }
    }

    async showEmployeeDetail(employeeId, viewType) {
        try {
            this.showLoading(true, 'Loading employee details...');
            
            const employee = this.employees.find(emp => emp.id === employeeId);
            const discScore = this.discScores.find(disc => disc.employee_id === employeeId);
            const pauliResult = this.pauliResults.find(pauli => pauli.employee_id === employeeId);

            if (!employee) {
                this.showError('Employee data not found');
                return;
            }

            // Update modal header
            document.getElementById('modalEmployeeName').textContent = employee.nama_lengkap;
            document.getElementById('modalEmployeeInfo').textContent = 
                `${employee.posisi} • Usia: ${employee.usia} • ${new Date(employee.tanggal_tes).toLocaleDateString('id-ID')}`;

            // Generate content based on view type
            const content = document.getElementById('employeeDetailContent');
            
            if (viewType === 'disc' && discScore) {
                content.innerHTML = this.generateDiscDetailView(employee, discScore);
            } else if (viewType === 'pauli' && pauliResult) {
                content.innerHTML = this.generatePauliDetailView(employee, pauliResult);
            } else if (viewType === 'combined' && discScore && pauliResult) {
                content.innerHTML = this.generateCombinedDetailView(employee, discScore, pauliResult);
            } else {
                content.innerHTML = '<p class="text-center text-gray-500 py-8">Data tidak lengkap untuk ditampilkan</p>';
            }

            // Show modal
            document.getElementById('employeeDetailModal').classList.remove('hidden');
            
            // Initialize charts after modal is visible
            setTimeout(() => {
                if (viewType === 'disc' && discScore) {
                    this.createDiscChart(discScore);
                } else if (viewType === 'pauli' && pauliResult) {
                    this.createPauliChart(pauliResult);
                } else if (viewType === 'combined' && discScore && pauliResult) {
                    this.createDiscChart(discScore);
                    this.createPauliChart(pauliResult);
                }
            }, 100);

        } catch (error) {
            console.error('Error showing employee detail:', error);
            this.showError('Gagal memuat detail karyawan');
        } finally {
            this.showLoading(false);
        }
    }

    generateDiscDetailView(employee, discScore) {
        return `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- DISC Chart -->
                <div class="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">📊 DISC Profile Chart</h3>
                    <div class="h-80">
                        <canvas id="discChart"></canvas>
                    </div>
                    
                    <!-- Raw Scores -->
                    <div class="mt-6 grid grid-cols-4 gap-4">
                        <div class="text-center p-3 bg-red-50 rounded">
                            <div class="text-2xl font-bold text-red-600">${discScore.skor_d}</div>
                            <div class="text-sm text-red-700">Dominance</div>
                        </div>
                        <div class="text-center p-3 bg-yellow-50 rounded">
                            <div class="text-2xl font-bold text-yellow-600">${discScore.skor_i}</div>
                            <div class="text-sm text-yellow-700">Influence</div>
                        </div>
                        <div class="text-center p-3 bg-green-50 rounded">
                            <div class="text-2xl font-bold text-green-600">${discScore.skor_s}</div>
                            <div class="text-sm text-green-700">Steadiness</div>
                        </div>
                        <div class="text-center p-3 bg-blue-50 rounded">
                            <div class="text-2xl font-bold text-blue-600">${discScore.skor_c}</div>
                            <div class="text-sm text-blue-700">Compliance</div>
                        </div>
                    </div>
                </div>

                <!-- Analysis -->
                <div class="space-y-6">
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 class="font-semibold text-blue-800 mb-2">Personality Type</h4>
                        <p class="text-2xl font-bold text-blue-900">${discScore.profil_dominan}</p>
                    </div>

                    <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h4 class="font-semibold text-gray-800 mb-3">Full Analysis</h4>
                        <p class="text-gray-700 text-sm leading-relaxed">${discScore.analisis}</p>
                    </div>

                    <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 class="font-semibold text-green-800 mb-3">Strengths</h4>
                        <p class="text-green-700 text-sm leading-relaxed">${discScore.kekuatan}</p>
                    </div>

                    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h4 class="font-semibold text-yellow-800 mb-3">Development Areas</h4>
                        <p class="text-yellow-700 text-sm leading-relaxed">${discScore.area_pengembangan}</p>
                    </div>

                    <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h4 class="font-semibold text-purple-800 mb-3">Job Fit Recommendations</h4>
                        <p class="text-purple-700 text-sm leading-relaxed">${discScore.saran_pekerjaan}</p>
                    </div>
                </div>
            </div>
        `;
    }

    generatePauliDetailView(employee, pauliResult) {
        return `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Charts -->
                <div class="space-y-6">
                    <div class="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">📈 Productivity Over Time</h3>
                        <div class="h-64">
                            <canvas id="pauliChart"></canvas>
                        </div>
                    </div>

                    <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h4 class="font-semibold text-gray-800 mb-4">Performance Metrics</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="text-center p-3 bg-blue-50 rounded">
                                <div class="text-2xl font-bold text-blue-600">${pauliResult.total_dikerjakan}</div>
                                <div class="text-sm text-blue-700">Total Attempted</div>
                            </div>
                            <div class="text-center p-3 bg-green-50 rounded">
                                <div class="text-2xl font-bold text-green-600">${pauliResult.jawaban_benar}</div>
                                <div class="text-sm text-green-700">Correct</div>
                            </div>
                            <div class="text-center p-3 bg-red-50 rounded">
                                <div class="text-2xl font-bold text-red-600">${pauliResult.jawaban_salah}</div>
                                <div class="text-sm text-red-700">Wrong</div>
                            </div>
                            <div class="text-center p-3 bg-purple-50 rounded">
                                <div class="text-2xl font-bold text-purple-600">${pauliResult.akurasi_persen}%</div>
                                <div class="text-sm text-purple-700">Accuracy</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Analysis -->
                <div class="space-y-6">
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 class="font-semibold text-blue-800 mb-3">Performance Summary</h4>
                        <div class="space-y-2 text-sm">
                            <div><span class="font-medium">Productivity:</span> ${pauliResult.produktivitas}</div>
                            <div><span class="font-medium">Concentration:</span> ${pauliResult.konsistensi}</div>
                            <div><span class="font-medium">Accuracy Level:</span> ${pauliResult.ketelitian}</div>
                            <div><span class="font-medium">Stamina:</span> ${pauliResult.stamina}</div>
                        </div>
                    </div>

                    <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h4 class="font-semibold text-gray-800 mb-3">Detailed Analysis</h4>
                        <p class="text-gray-700 text-sm leading-relaxed">${pauliResult.analisis}</p>
                    </div>

                    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h4 class="font-semibold text-yellow-800 mb-3">Speed Analysis</h4>
                        <p class="text-yellow-700 text-sm">
                            Average speed: <strong>${pauliResult.kecepatan_per_menit} problems/minute</strong><br>
                            This indicates ${pauliResult.kecepatan_per_menit > 30 ? 'very high' : pauliResult.kecepatan_per_menit > 20 ? 'good' : 'moderate'} processing speed.
                        </p>
                    </div>

                    ${this.generateConcentrationAnalysis(pauliResult)}
                </div>
            </div>
        `;
    }

    generateCombinedDetailView(employee, discScore, pauliResult) {
        const combinedAnalysis = this.generateDetailedCombinedAnalysis(discScore, pauliResult);
        
        return `
            <div class="space-y-8">
                <!-- Combined Summary -->
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">🔄 Combined Profile Analysis</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-white p-4 rounded border">
                            <div class="text-sm text-gray-600 mb-1">DISC Type</div>
                            <div class="font-bold text-blue-600">${discScore.profil_dominan}</div>
                        </div>
                        <div class="bg-white p-4 rounded border">
                            <div class="text-sm text-gray-600 mb-1">Pauli Performance</div>
                            <div class="font-bold text-green-600">${pauliResult.produktivitas}</div>
                        </div>
                        <div class="bg-white p-4 rounded border">
                            <div class="text-sm text-gray-600 mb-1">Overall Fit</div>
                            <div class="font-bold text-purple-600">${this.generateCombinedFit(discScore, pauliResult)}</div>
                        </div>
                    </div>
                </div>

                <!-- Charts Side by Side -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-gray-800 mb-4">📊 DISC Profile</h4>
                        <div class="h-64">
                            <canvas id="discChart"></canvas>
                        </div>
                    </div>
                    <div class="bg-white border border-gray-200 rounded-lg p-6">
                        <h4 class="text-lg font-semibold text-gray-800 mb-4">📈 Pauli Performance</h4>
                        <div class="h-64">
                            <canvas id="pauliChart"></canvas>
                        </div>
                    </div>
                </div>

                <!-- Combined Analysis -->
                <div class="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 class="text-lg font-semibold text-gray-800 mb-4">🎯 Combined Analysis & Recommendations</h4>
                    <div class="prose prose-sm max-w-none text-gray-700">
                        ${combinedAnalysis}
                    </div>
                </div>

                <!-- Job Suitability -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 class="font-semibold text-green-800 mb-3">✅ Recommended Roles</h4>
                        <div class="text-green-700 text-sm">
                            ${this.generateRoleRecommendations(discScore, pauliResult)}
                        </div>
                    </div>
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 class="font-semibold text-blue-800 mb-3">📋 HR Notes</h4>
                        <div class="text-blue-700 text-sm">
                            ${this.generateHRNotes(discScore, pauliResult)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateConcentrationAnalysis(pauliResult) {
        const trends = this.analyzePauliTrends(pauliResult);
        return `
            <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h4 class="font-semibold text-indigo-800 mb-3">📊 Concentration Pattern</h4>
                <div class="space-y-2 text-sm text-indigo-700">
                    <p><strong>Trend Analysis:</strong> ${trends.overall}</p>
                    <p><strong>Peak Performance:</strong> ${trends.peak}</p>
                    <p><strong>Fatigue Pattern:</strong> ${trends.fatigue}</p>
                    <p><strong>Recommendation:</strong> ${trends.recommendation}</p>
                </div>
            </div>
        `;
    }

    generateDetailedCombinedAnalysis(discScore, pauliResult) {
        const discType = this.getHighestDiscDimension(discScore);
        const workStyle = this.getDiscWorkStyle(discType);
        const pauliWorkStyle = this.getPauliWorkStyle(pauliResult);
        
        return `
            <div class="space-y-4">
                <h5 class="font-semibold text-gray-800">Personality & Performance Integration</h5>
                <p><strong>DISC Profile:</strong> ${discScore.profil_dominan} - ${workStyle}</p>
                <p><strong>Work Performance:</strong> ${pauliWorkStyle}</p>
                
                <h5 class="font-semibold text-gray-800 mt-6">Combined Strengths</h5>
                <ul class="list-disc list-inside space-y-1 text-sm">
                    ${this.getCombinedStrengths(discScore, pauliResult).map(strength => `<li>${strength}</li>`).join('')}
                </ul>
                
                <h5 class="font-semibold text-gray-800 mt-6">Development Areas</h5>
                <ul class="list-disc list-inside space-y-1 text-sm">
                    ${this.getCombinedDevelopmentAreas(discScore, pauliResult).map(area => `<li>${area}</li>`).join('')}
                </ul>
                
                <h5 class="font-semibold text-gray-800 mt-6">Work Environment Preferences</h5>
                <p class="text-sm">${this.getWorkEnvironmentPreferences(discScore, pauliResult)}</p>
            </div>
        `;
    }

    generateRoleRecommendations(discScore, pauliResult) {
        const discType = this.getHighestDiscDimension(discScore);
        const productivity = this.categorizePauliProductivity(pauliResult);
        const accuracy = pauliResult.akurasi_persen;
        
        const recommendations = [];
        
        // Healthcare-specific recommendations based on DISC + Pauli
        if (discType === 'D' && productivity === 'High' && accuracy > 85) {
            recommendations.push('🏥 Pharmacy Manager - Strong leadership with high accuracy');
            recommendations.push('📋 Clinical Operations Supervisor - Decision-making capability');
        }
        
        if (discType === 'I' && productivity === 'High') {
            recommendations.push('👥 Health Advisor - Excellent people skills with good performance');
            recommendations.push('🎯 Patient Education Specialist - Communication strengths');
        }
        
        if (discType === 'S' && pauliResult.konsistensi === 'Konsisten') {
            recommendations.push('⚕️ Tenaga Teknis Kefarmasian - Reliable and consistent performance');
            recommendations.push('📊 Inventory Management - Steady work approach');
        }
        
        if (discType === 'C' && accuracy > 90) {
            recommendations.push('🔍 Quality Control Pharmacist - High attention to detail');
            recommendations.push('📋 Regulatory Affairs - Compliance-focused role');
        }
        
        // General backup recommendations
        if (recommendations.length === 0) {
            recommendations.push('🏥 Healthcare Support Roles - Good foundational skills');
            recommendations.push('📚 Training and Development - Potential for growth');
        }
        
        return recommendations.join('<br>');
    }

    generateHRNotes(discScore, pauliResult) {
        const notes = [];
        const discType = this.getHighestDiscDimension(discScore);
        const productivity = this.categorizePauliProductivity(pauliResult);
        
        // Performance notes
        notes.push(`<strong>Performance Level:</strong> ${productivity} productivity with ${pauliResult.akurasi_persen}% accuracy`);
        
        // Management style recommendations
        if (discType === 'D') {
            notes.push(`<strong>Management:</strong> Give autonomy, direct communication, challenging tasks`);
        } else if (discType === 'I') {
            notes.push(`<strong>Management:</strong> Provide social interaction, recognition, variety in work`);
        } else if (discType === 'S') {
            notes.push(`<strong>Management:</strong> Ensure stability, clear processes, supportive environment`);
        } else if (discType === 'C') {
            notes.push(`<strong>Management:</strong> Provide detailed instructions, quality standards, quiet workspace`);
        }
        
        // Training recommendations
        if (pauliResult.akurasi_persen < 80) {
            notes.push(`<strong>Training Need:</strong> Focus on accuracy and attention to detail`);
        }
        
        if (productivity === 'Low') {
            notes.push(`<strong>Development:</strong> Time management and efficiency training recommended`);
        }
        
        // Risk factors
        if (pauliResult.stamina === 'Rendah') {
            notes.push(`<strong>Note:</strong> May need breaks during intensive tasks`);
        }
        
        return notes.join('<br>');
    }

    // Helper functions for analysis
    analyzePauliTrends(pauliResult) {
        // Simulate trend analysis based on available data
        const accuracy = pauliResult.akurasi_persen;
        const speed = pauliResult.kecepatan_per_menit;
        
        let overall = 'Stable performance';
        let peak = 'Middle of test period';
        let fatigue = 'Minimal fatigue observed';
        let recommendation = 'Suitable for consistent work tasks';
        
        if (speed > 25 && accuracy > 85) {
            overall = 'High performance with good concentration';
            peak = 'Strong throughout test';
            fatigue = 'Low fatigue impact';
            recommendation = 'Excellent for demanding cognitive tasks';
        } else if (accuracy < 75) {
            overall = 'Performance affected by concentration issues';
            peak = 'Early test period';
            fatigue = 'Significant fatigue impact';
            recommendation = 'May benefit from shorter work intervals';
        }
        
        return { overall, peak, fatigue, recommendation };
    }

    getHighestDiscDimension(discScore) {
        const scores = {
            'D': discScore.skor_d,
            'I': discScore.skor_i,
            'S': discScore.skor_s,
            'C': discScore.skor_c
        };
        return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    }

    getDiscWorkStyle(discType) {
        const styles = {
            'D': 'Direct, results-oriented, takes charge in situations',
            'I': 'Enthusiastic, people-focused, optimistic approach to work',
            'S': 'Patient, reliable, prefers stable work environment',
            'C': 'Analytical, precise, focuses on quality and accuracy'
        };
        return styles[discType] || 'Balanced approach to work';
    }

    getPauliWorkStyle(pauliResult) {
        const speed = pauliResult.kecepatan_per_menit;
        const accuracy = pauliResult.akurasi_persen;
        
        if (speed > 25 && accuracy > 85) {
            return 'High-speed processor with maintained accuracy';
        } else if (speed > 25) {
            return 'Fast worker but may sacrifice some accuracy';
        } else if (accuracy > 90) {
            return 'Deliberate worker with high attention to detail';
        } else {
            return 'Steady worker with room for improvement';
        }
    }

    categorizePauliProductivity(pauliResult) {
        const speed = pauliResult.kecepatan_per_menit;
        if (speed > 25) return 'High';
        if (speed > 15) return 'Medium';
        return 'Low';
    }

    getCombinedStrengths(discScore, pauliResult) {
        const strengths = [];
        const discType = this.getHighestDiscDimension(discScore);
        const accuracy = pauliResult.akurasi_persen;
        const speed = pauliResult.kecepatan_per_menit;
        
        if (discType === 'D' && speed > 20) {
            strengths.push('Leadership potential with good work pace');
        }
        if (discType === 'I' && accuracy > 80) {
            strengths.push('People skills combined with reliable performance');
        }
        if (discType === 'S' && pauliResult.konsistensi === 'Konsisten') {
            strengths.push('Reliability and steady performance');
        }
        if (discType === 'C' && accuracy > 85) {
            strengths.push('Exceptional attention to detail and quality focus');
        }
        
        if (strengths.length === 0) {
            strengths.push('Balanced skill set with potential for development');
        }
        
        return strengths;
    }

    getCombinedDevelopmentAreas(discScore, pauliResult) {
        const areas = [];
        const discType = this.getHighestDiscDimension(discScore);
        const accuracy = pauliResult.akurasi_persen;
        const speed = pauliResult.kecepatan_per_menit;
        
        if (accuracy < 80) {
            areas.push('Focus on improving accuracy and attention to detail');
        }
        if (speed < 15) {
            areas.push('Work on processing speed and efficiency');
        }
        if (discType === 'D' && accuracy < 85) {
            areas.push('Balance decisiveness with careful attention to detail');
        }
        if (discType === 'I' && speed < 20) {
            areas.push('Maintain enthusiasm while improving work pace');
        }
        
        if (areas.length === 0) {
            areas.push('Continue to maintain current performance level');
        }
        
        return areas;
    }

    getWorkEnvironmentPreferences(discScore, pauliResult) {
        const discType = this.getHighestDiscDimension(discScore);
        const consistency = pauliResult.konsistensi;
        
        let environment = '';
        
        if (discType === 'D') {
            environment = 'Prefers autonomous work environment with challenging tasks and clear goals.';
        } else if (discType === 'I') {
            environment = 'Thrives in collaborative, social environment with variety and recognition.';
        } else if (discType === 'S') {
            environment = 'Works best in stable, supportive environment with clear procedures.';
        } else if (discType === 'C') {
            environment = 'Needs quiet, organized workspace with detailed standards and quality focus.';
        }
        
        if (consistency === 'Konsisten') {
            environment += ' Shows ability to maintain performance in structured settings.';
        }
        
        return environment;
    }

    // ===== CHART CREATION FUNCTIONS =====
    createDiscChart(discScore) {
        const canvas = document.getElementById('discChart');
        if (!canvas) return;

        // Destroy existing chart if it exists
        if (this.discChartInstance) {
            this.discChartInstance.destroy();
        }

        const ctx = canvas.getContext('2d');
        
        this.discChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Dominance (D)', 'Influence (I)', 'Steadiness (S)', 'Compliance (C)'],
                datasets: [{
                    label: 'DISC Scores',
                    data: [discScore.skor_d, discScore.skor_i, discScore.skor_s, discScore.skor_c],
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.8)',   // Red for D
                        'rgba(245, 158, 11, 0.8)',  // Yellow for I
                        'rgba(34, 197, 94, 0.8)',   // Green for S
                        'rgba(59, 130, 246, 0.8)'   // Blue for C
                    ],
                    borderColor: [
                        'rgba(239, 68, 68, 1)',
                        'rgba(245, 158, 11, 1)',
                        'rgba(34, 197, 94, 1)',
                        'rgba(59, 130, 246, 1)'
                    ],
                    borderWidth: 2,
                    borderRadius: 6,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        callbacks: {
                            label: function(context) {
                                return `Score: ${context.parsed.y}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 20,
                        ticks: {
                            stepSize: 2,
                            color: '#6b7280'
                        },
                        grid: {
                            color: 'rgba(107, 114, 128, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#6b7280',
                            font: {
                                size: 12,
                                weight: 'bold'
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    createPauliChart(pauliResult) {
        const canvas = document.getElementById('pauliChart');
        if (!canvas) return;

        // Destroy existing chart if it exists
        if (this.pauliChartInstance) {
            this.pauliChartInstance.destroy();
        }

        const ctx = canvas.getContext('2d');
        
        // Generate simulated minute-by-minute data based on overall performance
        const minuteData = this.generatePauliMinuteData(pauliResult);
        
        this.pauliChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: minuteData.labels,
                datasets: [{
                    label: 'Questions Answered',
                    data: minuteData.questions,
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3,
                    pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }, {
                    label: 'Correct Answers',
                    data: minuteData.correct,
                    borderColor: 'rgba(34, 197, 94, 1)',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3,
                    pointBackgroundColor: 'rgba(34, 197, 94, 1)',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            color: '#374151'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Questions',
                            color: '#6b7280'
                        },
                        ticks: {
                            color: '#6b7280'
                        },
                        grid: {
                            color: 'rgba(107, 114, 128, 0.1)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Time (Minutes)',
                            color: '#6b7280'
                        },
                        ticks: {
                            color: '#6b7280'
                        },
                        grid: {
                            color: 'rgba(107, 114, 128, 0.1)'
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    generatePauliMinuteData(pauliResult) {
        // Create realistic minute-by-minute performance simulation
        const totalMinutes = 10;
        const labels = [];
        const questionsData = [];
        const correctData = [];
        
        const avgQuestionsPerMinute = pauliResult.total_dikerjakan / totalMinutes;
        const accuracyRate = pauliResult.akurasi_persen / 100;
        
        let cumulativeQuestions = 0;
        let cumulativeCorrect = 0;
        
        for (let minute = 1; minute <= totalMinutes; minute++) {
            labels.push(`Min ${minute}`);
            
            // Simulate fatigue effect - slight decline in later minutes
            const fatigueMultiplier = minute <= 5 ? 1 : 1 - ((minute - 5) * 0.05);
            const questionsThisMinute = Math.round(avgQuestionsPerMinute * fatigueMultiplier * (0.8 + Math.random() * 0.4));
            const correctThisMinute = Math.round(questionsThisMinute * accuracyRate * (0.9 + Math.random() * 0.2));
            
            cumulativeQuestions += questionsThisMinute;
            cumulativeCorrect += correctThisMinute;
            
            questionsData.push(cumulativeQuestions);
            correctData.push(cumulativeCorrect);
        }
        
        // Adjust final values to match actual results
        const finalAdjustmentQ = pauliResult.total_dikerjakan / cumulativeQuestions;
        const finalAdjustmentC = pauliResult.jawaban_benar / cumulativeCorrect;
        
        return {
            labels,
            questions: questionsData.map(q => Math.round(q * finalAdjustmentQ)),
            correct: correctData.map(c => Math.round(c * finalAdjustmentC))
        };
    }

    closeEmployeeModal() {
        // Clean up chart instances
        if (this.discChartInstance) {
            this.discChartInstance.destroy();
            this.discChartInstance = null;
        }
        if (this.pauliChartInstance) {
            this.pauliChartInstance.destroy();
            this.pauliChartInstance = null;
        }
        
        // Hide modal
        document.getElementById('employeeDetailModal').classList.add('hidden');
    }

    // ===== UTILITY FUNCTIONS =====
    showLoading(show, text = 'Memproses...') {
        const modal = document.getElementById('loadingModal');
        const loadingText = document.getElementById('loadingText');
        
        if (show) {
            loadingText.textContent = text;
            modal.classList.remove('hidden');
        } else {
            modal.classList.add('hidden');
        }
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50';
        errorDiv.innerHTML = `
            <div class="flex items-center">
                <span class="mr-2">⚠️</span>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            if (document.body.contains(errorDiv)) {
                document.body.removeChild(errorDiv);
            }
        }, 5000);
    }
}

// Initialize the system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.psychologyTestSystem = new PsychologyTestSystem();
});